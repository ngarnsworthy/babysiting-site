var randomnum
var score
function calulate_baby_score() {
  ifcry = document.getElementById('cancry').checked;
  cry = document.getElementById('cry').value;
  score = 100
  scoreLess = 0
  if (ifcry) {
  if (cry > 0) {
    scoreLess += 1;
    if (cry > 10) {
      scoreLess += 1;
      if (cry > 20) {
        scoreLess += 1;
        if (cry > 30) {
          scoreLess += 1;
          if (cry > 40) {
            scoreLess += 1;
            if (cry > 50) {
              scoreLess += 1;
              if (cry > 60) {
                scoreLess += 1;
                if (cry > 70) {
                  scoreLess += 1;
                  if (cry > 80) {
                    scoreLess += 1;
                    if (cry > 90) {
                      scoreLess += 1;
                      if (cry > 100) {
                        scoreLess += .5
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};
      scoreLess=scoreLess*10;
      score-=scoreLess;
      alert("your number is"+randomnum);
      document.getElementById('score').innerHTML=score;
    };
function genRanNum() {
ran=Math.floor((Math.random() * 100) + 1);
return ran;
};
randomnum = genRanNum();
