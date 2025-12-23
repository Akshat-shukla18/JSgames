window.onload = function () {
    const canvas = document.getElementById("defaultCanvas");
    const ctx = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;
    const cw = 15; // cell width
    let d = "right";
    let food;
    let score = 0;
    const speed = 130;
    let snake = [];
    let gameLoop;

    /* ---------- Initialization ---------- */
    function init() {
        d = "right";
        score = 0;
        document.getElementById("overlay").style.display = "none";

        createSnake();
        createFood();

        if (gameLoop) clearInterval(gameLoop);
        gameLoop = setInterval(paint, speed);
    }

    init();

    /* ---------- Snake ---------- */
    function createSnake() {
        snake = [];
        for (let i = 4; i >= 0; i--) {
            snake.push({ x: i, y: 0 });
        }
    }

    /* ---------- Food ---------- */
    function createFood() {
        food = {
            x: Math.floor(Math.random() * (w / cw)),
            y: Math.floor(Math.random() * (h / cw))
        };
    }

    /* ---------- Paint ---------- */
    function paint() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = "white";
        ctx.strokeRect(0, 0, w, h);

        let nx = snake[0].x;
        let ny = snake[0].y;

        if (d === "right") nx++;
        if (d === "left") nx--;
        if (d === "up") ny--;
        if (d === "down") ny++;

        // Collision detection
        if (
            nx < 0 ||
            ny < 0 ||
            nx >= w / cw ||
            ny >= h / cw ||
            checkCollision(nx, ny, snake)
        ) {
            endGame();
            return;
        }

        let tail;
        if (nx === food.x && ny === food.y) {
            tail = { x: nx, y: ny };
            score++;
            createFood();
        } else {
            tail = snake.pop();
            tail.x = nx;
            tail.y = ny;
        }

        snake.unshift(tail);

        // Draw snake
        snake.forEach(cell => paintCell(cell.x, cell.y));

        // Draw food
        paintCell(food.x, food.y, "#00ff9c");
    }

    /* ---------- Cell ---------- */
    function paintCell(x, y, color = "red") {
        ctx.fillStyle = color;
        ctx.fillRect(x * cw, y * cw, cw, cw);
        ctx.strokeStyle = "white";
        ctx.strokeRect(x * cw, y * cw, cw, cw);
    }

    /* ---------- Collision ---------- */
    function checkCollision(x, y, array) {
        return array.some(cell => cell.x === x && cell.y === y);
    }

    /* ---------- End Game ---------- */
    function endGame() {
        clearInterval(gameLoop);
        document.getElementById("final_score").textContent = score;
        document.getElementById("overlay").style.display = "flex";
    }

    /* ---------- Controls ---------- */
    document.addEventListener("keydown", e => {
        const key = e.key;

        if (key === "ArrowLeft" && d !== "right") d = "left";
        if (key === "ArrowUp" && d !== "down") d = "up";
        if (key === "ArrowRight" && d !== "left") d = "right";
        if (key === "ArrowDown" && d !== "up") d = "down";
    });

    /* ---------- Restart ---------- */
    document.getElementById("restart-btn").addEventListener("click", init);
};
