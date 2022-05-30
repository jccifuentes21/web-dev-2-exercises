const printItems = (array) => {
  array.forEach((element) =>{
    if (Array.isArray(element)){
      printItems(element)
    } else {
      console.log(element)
    }
  })
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
