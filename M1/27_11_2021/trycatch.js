// Try Catch Statement

function throwsIfTrue(error) {
  if (error) {
    throw new Error('Isso é um erro');
  }
  return 'Não deu erro';
};

try {
  const result = throwsIfTrue(false); // Erro
  console.log('Estou no Try');
  console.log(result);
} catch (error) {
  console.log('estou no catch');
  console.log(error);
} finally {
  console.log('No matter if is error or not i will be executed')
}


const findIndexName = (name) => {
  const names = ['Gabriel', 'Lucas', 'Amanda', 'Roberta'];
  const findedNameIndex = names.indexOf(name);
  if (typeof name !== 'string') {
    throw new Error('Type of name need to be string');
  }
  if (findedNameIndex === -1) {
    throw new Error('Name not founded');
  }
  return `The index of name is ${findedNameIndex}`;
}
try {
  const index = findIndexName(2);
  console.log(index);
} catch (error) {
  console.error(error);
}