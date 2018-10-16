$(document).ready(function(){
    $("#footer").click(function(){
        $("#footer").css("background-color", "#ff9a9e");
    });
});

function show_result(){
var q1 = prompt('Which personality are you more close to? \n 1 = Social \n 2 = Solitary');
var q2 = prompt('How would you describe yourself? \n 1 = Talker \n 2 = Listener');
var q3 = prompt('Which attracts you more? \n 1 = Sea \n 2 = Sky');
var q4 = prompt('What weather do you like more? \n 1 = Sunny \n 2 = Rainy');
if(q1 =='1' && q2 == '1' && q3 == '1' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Lion!';
  document.getElementById("answer_space").innerHTML = 'Having a lion as your power animal will persuade you to examine yourself <br> and weigh your strengths and weaknesses before acting in order to <br>take full advantage of a situation.';
  document.getElementById("animal").src="https://images.unsplash.com/photo-1502764088999-001291e403de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa02d6fc7d1a70beff0f21d92cd922cf&auto=format&fit=crop&w=1241&q=80"
}
else if(q1 =='1' && q2 == '1' && q3 == '2' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Lion!';
  document.getElementById("answer_space").innerHTML = 'Having a lion as your power animal will persuade you to examine yourself <br>and weigh your strengths and weaknesses before acting in order to <br>take full advantage of a situation.';
  document.getElementById("animal").src="https://images.unsplash.com/photo-1502764088999-001291e403de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa02d6fc7d1a70beff0f21d92cd922cf&auto=format&fit=crop&w=1241&q=80"
}
else if(q1 =='1' && q2 == '2' && q3 == '1' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Dolphin!';
	document.getElementById("answer_space").innerHTML = 'The dolphin represents harmony and balance. Dolphins are also a symbol of <br>protection and of resurrection. Their playful nature can remind you <br>to get more in touch with your humor and joy.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1512164599836-a491ef79f6d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23487c8194b58eae5c501b3c8a74602c&auto=format&fit=crop&w=1050&q=80"
}
else if(q1 =='1' && q2 == '2' && q3 == '2' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Dolphin!';
	document.getElementById("answer_space").innerHTML = 'The dolphin represents harmony and balance. Dolphins are also a symbol of <br>protection and of resurrection. Their playful nature can remind you <br>to get more in touch with your humor and joy.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1512164599836-a491ef79f6d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23487c8194b58eae5c501b3c8a74602c&auto=format&fit=crop&w=1050&q=80"
}
else if(q1 =='2' && q2 == '1' && q3 == '1' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Wolf!';
	document.getElementById("answer_space").innerHTML = 'The wolf brings forth, instinct, intelligence, <br>appetite for freedom and the importance of social connections. <br>The wolf can slaps symbolize fear and lack of trust, <br>be aware where you see the wolf in your life, <br>as it can be an important wake up call to reach to others more.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1517993037474-692208825419?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbc9915c474cd6381c44178181e1612a&auto=format&fit=crop&w=1050&q=80"
}
else if(q1 =='2' && q2 == '1' && q3 == '2' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Wolf!';
	document.getElementById("answer_space").innerHTML = 'The wolf brings forth, instinct, intelligence, <br>appetite for freedom and the importance of social connections. <br>The wolf can slaps symbolize fear and lack of trust, <br>be aware where you see the wolf in your life, <br>as it can be an important wake up call to reach to others more.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1517993037474-692208825419?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbc9915c474cd6381c44178181e1612a&auto=format&fit=crop&w=1050&q=80"
}
else if(q1 =='2' && q2 == '2' && q3 == '1' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Cat!';
	document.getElementById("answer_space").innerHTML = 'More introverted, you appreciate quiet and comfortable <br>spots where you can enjoy solitary pursuits. <br>Much like a shy cat, you prefer smaller groups or <br>solo time until you feel comfortable, <br>but people who take the time to get to know you <br>are rewarded by your slow-burn wonderfulness.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e63b07fb95899a6cb247964cbf80e401&auto=format&fit=crop&w=1050&q=80"
}
else if(q1 =='2' && q2 == '2' && q3 == '2' && q4 =='1')
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Cat!';
	document.getElementById("answer_space").innerHTML = 'More introverted, you appreciate quiet and comfortable <br>spots where you can enjoy solitary pursuits. <br>Much like a shy cat, you prefer smaller groups or <br>solo time until you feel comfortable, <br>but people who take the time to get to know you <br>are rewarded by your slow-burn wonderfulness.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e63b07fb95899a6cb247964cbf80e401&auto=format&fit=crop&w=1050&q=80"
}
else
{
  document.getElementById("title").innerHTML = 'Your spirit animal is Horse!';
  document.getElementById("answer_space").innerHTML = 'A stable companion. Friendly, sensible and ticklish, <br>horses insist at taking charge of their lives, <br>at least until a special someone comes along <br>to whom they are happy to give up the reins.' ;
  document.getElementById("animal").src="https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a982cdff8b38d0758caa758e71f50e0&auto=format&fit=crop&w=1050&q=80"
}
}
