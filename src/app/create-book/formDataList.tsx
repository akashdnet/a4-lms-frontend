export const formDataList = {
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: "",
    available: "",
  }


export const makeDataSafeAgain = (data:any)=>{

  return {
    title: data.title,
    author: data.author,
    genre: data.genre,
    isbn: data.isbn,
    description: data.description,
    copies: data.copies,
    available: data.available
  }


}