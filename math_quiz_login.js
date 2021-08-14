function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player1_name", player1_name);
    localStorage.setItem("Player2_name", player2_name);

    window.location = "math_quiz_game.html";
}