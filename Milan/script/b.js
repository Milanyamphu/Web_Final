  var a = new String("There are six students. Their scores are as follows.");
  var b = new String("The following students are the students who can get A.");
  var c = new String("Sort scores in descending order.");
  document.write(a.bold() +"<br/>");
  
  var n  = new Array(6);
          var score = new Array (6);
          n[0] = "Wang";
          score[0] =80;
          n[1] = "Chen";
          score[1] = 75;
          n[2] = "Zhao";
          score[2] = 92;
          n[3] = "Liu";
          score[3] = 60;
          n[4] =" Yamamoto";
          score[4] = 91;
          n[5] = "Tanaka";
          score[5] = 82;
  var str ="";
  for (var i=0;i<6;i++){
      str = n[i] +" " + score [i] +"<br/>";
      document.write(str)
  }
  
  document.write("<br/>");
  document.write(b.bold() +"<br/>");
  
  for (let i = 0; i < score.length; i++) {
    if (score[i] > 90) {
      document.write(n[i] + " " + score[i])
      document.write("<br/>");
  }
  }
  
  document.write("<br/>");
  
  let s=0;
  for(i = 0; i < score.length;i+=1){
    s += score[i]}
      document.write("Total score is "+ s + ".<br/>");
      document.write("The average score is "+ s/score.length + ".<br/>");
      document.write("<br/>");
      document.write(c.bold() +"<br/>");
  
  students = [];
  for (let i = 0; i < n.length; i++) {
    students.push({ name: n[i], score: score[i] });
  }
  students.sort((x, y) => y.score - x.score);
  for (let i = 0; i < students.length; i++) {
    document.write(students[i].name + ' ' + students[i].score + '<br>');
  }