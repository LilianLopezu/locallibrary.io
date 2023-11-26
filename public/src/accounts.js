function findAccountById(accounts, id) {
  const resultado = accounts.find((account) => account.id === id);
  return resultado;
}

function sortAccountsByLastName(accounts) {
  
  const resultado = accounts.sort((a, b) => {
    const nameA = a.name.last.toUpperCase();
    const nameB = b.name.last.toUpperCase();
    if (nameA == nameB) return 0
    return (nameA < nameB ? -1 : 1);
  });
  
  return resultado;
}

function getAccountFullNames(accounts) {
  const result = accounts.map((account) => account.name.first + ' ' + account.name.last);
  
  return result;
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
