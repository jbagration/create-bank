import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export const generatePDF = async (
    element: HTMLDivElement | null,
    theme: any
) => {
    if (element) {
        const canvas = await html2canvas(element, {
            height: 1340,
            backgroundColor: theme.palette.BackStandart.BackgroundQuinary,
        })
        const image = canvas.toDataURL('image/png', 1.0)
        // eslint-disable-next-line new-cap
        const doc = new jsPDF('p', 'mm')
        doc.addImage(image, 'PNG', 0, 0, 210, 350)
        return doc.save('Выписка по дебетовой карте.pdf', {
            returnPromise: true,
        })
    }
}
