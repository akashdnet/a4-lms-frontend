

export interface IBorrowField {
  bookId: String;
  quantity: Number;
  dueDate: Date;
}

export const formDataList: IBorrowField = {
  bookId: "",
  quantity: 0,
  dueDate: new Date(),
};

export const makeDataSafeAgain = (data: IBorrowField) => {
  return {
    bookId: data.bookId,
    quantity: data.quantity,
    dueDate: data.dueDate,
  };
};
