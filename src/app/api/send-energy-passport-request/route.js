import { Resend } from 'resend';


export async function POST(request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const formData = await request.formData();

        // Extract text fields
        const buildingType = formData.get('buildingType');
        const streetAndNumber = formData.get('streetAndNumber');
        const cadastralParcel = formData.get('cadastralParcel');
        const cadastralMunicipality = formData.get('cadastralMunicipality');
        const city = formData.get('city');
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const note = formData.get('note');
        const printedCopy = formData.get('printedCopy');

        // Build HTML content
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #1a7a82;">Novi zahtev za energetski pasoš</h2>
                
                <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Podaci o objektu:</h3>
                <ul>
                    <li><strong>Vrsta zgrade:</strong> ${buildingType}</li>
                    <li><strong>Ulica i broj:</strong> ${streetAndNumber || '-'}</li>
                    <li><strong>Broj katastarske parcele:</strong> ${cadastralParcel}</li>
                    <li><strong>Katastarska opština:</strong> ${cadastralMunicipality}</li>
                    <li><strong>Mesto:</strong> ${city || '-'}</li>
                </ul>
                
                <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Kontakt podaci:</h3>
                <ul>
                    <li><strong>Ime i prezime:</strong> ${fullName}</li>
                    <li><strong>E-mail:</strong> ${email}</li>
                    <li><strong>Telefon:</strong> ${phone}</li>
                </ul>
                
                <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Dodatne opcije:</h3>
                <ul>
                    <li><strong>Štampana forma:</strong> ${printedCopy === 'true' ? 'Da' : 'Ne'}</li>
                </ul>
                <div style="margin-top: 15px;">
                    <strong>Napomena:</strong><br/>
                    <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${note || '-'}</p>
                </div>
            </div>
        `;

        // Extract files
        const attachments = [];
        const fileFields = ['docBuildingPermit', 'docArchitecturalProject', 'docMechanicalProject', 'docEfficiencyElaborate', 'docPhotos'];

        for (const field of fileFields) {
            const files = formData.getAll(field);
            for (const file of files) {
                if (file && file.size > 0 && typeof file !== 'string') {
                    const arrayBuffer = await file.arrayBuffer();
                    const buffer = Buffer.from(arrayBuffer);

                    attachments.push({
                        filename: file.name,
                        content: buffer,
                    });
                }
            }
        }

        const { data, error } = await resend.emails.send({
            from: 'Eneplus Zahtev <onboarding@resend.dev>',
            to: ['office@eneplus.rs'],
            subject: `Zahtev za energetski pasoš - ${fullName}`,
            html: htmlContent,
            attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (error) {
            console.error("Resend API error:", error);
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } catch (error) {
        console.error("API error processing request:", error);
        return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 });
    }
}
