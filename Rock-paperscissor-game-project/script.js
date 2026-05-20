        let score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            loses : 0,
            ties : 0
        };

        updateScoreElement();

        function pickComputerMove()
        {
            let randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3)
                computerMove = 'rock';

            else if(randomNumber >= 1/3 && randomNumber < 2/3)
                computerMove = 'paper';

            else
                computerMove = 'scissors';

            return computerMove;
        }

        function playGame(playerMove)
        {
            let computerMove = pickComputerMove();
            let result = '';

            if(playerMove === 'rock')
            {
                if(computerMove === 'rock')
                    result = 'TIE';

                else if(computerMove === 'paper')
                    result = 'YOU LOSE';

                else if(computerMove === 'scissors')
                    result = 'YOU WIN';
            }

            else if(playerMove === 'paper')
            {
                if(computerMove === 'rock')
                    result = 'YOU WIN';

                else if(computerMove === 'paper')
                    result = 'TIE';

                else if(computerMove === 'scissors')
                    result = 'YOU LOSE';
            }

            else if(playerMove === 'scissors')
            {
                if(computerMove === 'rock')
                    result = 'YOU LOSE';

                else if(computerMove === 'paper')
                    result = 'YOU WIN';

                else if(computerMove === 'scissors')
                    result = 'TIE';
            }

            //document.querySelector('.js-result').innerHTML = result;

            document.getElementById('id-result').innerHTML = result;

            document.querySelector('.js-move').innerHTML = `you <img src="images/${playerMove}-emoji.png" class="resultmove"> 
            <img src="images/${computerMove}-emoji.png" class="resultmove"> computer`;

            if(result === 'YOU WIN')
              score.wins++;
            else if(result === 'YOU LOSE')
              score.loses++;
            else
              score.ties++;

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}!
// wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`);
        }

        function updateScoreElement()
        {
            document.querySelector('.js-score').innerHTML = `wins: ${score.wins} loses: ${score.loses} ties: ${score.ties}`;
        }

        function reSetScore()
        {
            score.wins = 0;
            score.loses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();
            //alert('score was reseted');
        }