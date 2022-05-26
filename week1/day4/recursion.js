const printItems = (array) => {
  if(array.length > 0){
    console.log(array[0])
    printItems(array.slice(1))
  }
};

const array = ['😎', '💩', '🤗', '😼', '😂'];
printItems(array);

const array2 = ['😎', ['💩', '🤗'], '😼', '😂'];
printItems(array2);

const array3 = [
  '😎',
  [
    ['💩', ['🤗']],
    [[['😼']], '😂'],
  ],
];
printItems(array3);
