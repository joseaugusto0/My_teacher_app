


export const FormatterService = {
    monetaryValue(value: number): string {
        return value.toLocaleString(
            'pt-BR', 
            {
                minimumFractionDigits:2, 
                style: 'currency', 
                currency: 'BRL'
            })
    },

    limitDescription(text: string, maxLength: number=50): string {
        if (text.length < maxLength){
            return text
        }

        return text.slice(0,maxLength)+ "..."
    }
}