export const normalizedDate = (date: string | Date) => {
  const record = new Date(date);
  const year = record.getFullYear();
  const month = record.getMonth() + 1;
  const day = record.getDate();
  const hour = record.getHours();
  const minute = record.getMinutes();
  const dateNow =
    day.toString().padStart(2, "0") +
    "/" +
    month.toString().padStart(2, "0") +
    "/" +
    year +
    " ";

  return dateNow;
};
export const normalizedDateFormatDB = (date: string | Date) => {
  const record = new Date(date);
  const year = record.getFullYear();
  const month = record.getMonth() + 1;
  const day = record.getDate();
  const hour = record.getHours();
  const minute = record.getMinutes();
  const dateNow =
  year +
    "-" +
    month.toString().padStart(2, "0") +
    "-" +
    day.toString().padStart(2, "0");

  return dateNow;
};
export const normalizedDateAndTime = (date: string | Date,time:string) => {
  const record = new Date(date);
  let arr =time.split(':');
  const year = record.getFullYear();
  const month = record.getMonth() + 1;
  const day = record.getDate();
  const hour = arr[0];
  const minute = arr[1];
  const dateNow =
  month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0") +
    "/" +
    year +
    " "+
    hour+
    ":"+
    minute;

  return dateNow;
};