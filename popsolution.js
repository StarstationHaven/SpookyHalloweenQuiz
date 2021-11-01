//changed total number of questions to 7
var total = 7
var question=new Array()
for (i = 1; i <= total + 1; i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Great! Super Spooky!"
compliments[1]="You're smarter than Frakenstein!"
compliments[2]="Faboolous."
compliments[3]="Fangtastic!"
compliments[4]="You're doing a ghastly good job!"
compliments[5]="You monster mashed the right answer."
compliments[6]="Nice, you're creeping it real."
compliments[7]="Pumpkin spice and everything nice."


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What candy is most commonly associated with Halloween?"
choice1[1]="Candy Corn"
choice1[2]="Snickers"
choice1[3]="Candy Hearts"
choice1[4]="Gummy Worms"

question[2]="What is Halloween night also know as?"
choice2[1]="Hallownight"
choice2[2]="Hollow Bastion"
choice2[3]="All Hollows'Eve"
choice2[4]="Christmas Eve"

question[3]="What is Frakenstein?"
choice3[1]="Monster"
choice3[2]="Dracula"
choice3[3]="Ghost"
choice3[4]="Doctor/Scientist"

question[4]="Where is Dracula's home, Transylvania, located?"
choice4[1]="Africa"
choice4[2]="North Pole"
choice4[3]="Australia"
choice4[4]="Romania"

question[5]="What vegetable was carved before pumpkins on Halloween?"
choice5[1]="Lettuce"
choice5[2]="Apples"
choice5[3]="Cucumbers"
choice5[4]="Turnips"

question[6]="Why did people originally dress up on Halloween?"
choice6[1]="Costume Parties"
choice6[2]="Warding Off Ghosts"
choice6[3]="Pranking Others"
choice6[4]="Other Clothes Weren't Avaliable"

question[7]="What was Trick-or-Treating originally called?"
choice7[1]="Feasting and Eating"
choice7[2]="Sleeping and Keeping"
choice7[3]="Souling and Guising"
choice7[4]="Pranking and Teasing"

solution[1]="a"
solution[2]="c"
solution[3]="d"
solution[4]="d"
solution[5]="d"
solution[6]="b"
solution[7]="c"
