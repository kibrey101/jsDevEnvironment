
import  './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0, 0.00');

const para = document.createElement("h2");
const att = document.createAttribute('id');
att.value = "greet";
para.setAttributeNode(att);                // Create a <p> node `I would pay ${courseValue} for this course!!`
const t = document.createTextNode("hi kibre");      // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.getElementById("myDIV").appendChild(para); 
//debugger;
console.log(`I would pay ${courseValue} for this course!!`);//eslint-disable-line no-console

