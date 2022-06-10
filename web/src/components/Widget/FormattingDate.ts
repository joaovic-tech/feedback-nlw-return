// FormattingDate

const getDate = new Date();
export const date = getDate.toLocaleDateString('pt-BR', { dateStyle: 'full' });
