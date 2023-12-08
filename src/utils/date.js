export const getDate = (date) => {
    const date_obj = new Date(date);
    return `${date_obj.getDate()}/${date_obj.getMonth()+1}/${date_obj.getFullYear()}`
}