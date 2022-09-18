            var frame = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const words = ["grenadine", "demonic", "hefty", "gladiolous", "effeminate",
                    "concretize", "adjustable", "adoption", "analysis", "bother", "boundary", "cherry", "chicken",
                    "congratulations", "divided", "elementary", "fool", "genre", "guy", "indication", "likely", "manual",
                    "musician", "olive", "north", "penguin", "record", "satisfaction", "temporary", "verify"];

            var a = Math.floor(Math.random() * 30);

            class Obstacle {
                constructor(position) {
                    this.position = position;
                    this.radius = Math.random() * 55 + 45;
                    this.dx = Math.random() * 20 + 10;
                    this.dy = -Math.random() * 20 + 10;
                    this.color = Color();
                }

                Movement() {
                    if (this.position.x < 0 || this.position.x > canvas.width)
                    {
                        this.dx = -this.dx;
                    }

                    if (this.position.y < 0 || this.position.y > canvas.height) {
                        this.dy = -this.dy;
                    }

                    let text = words[a];
                    frame.beginPath();
                    frame.fillStyle = "white";
                    frame.font = "1vw Nothing You Could Do";
                    frame.fillText(text, canvas.width/2, canvas.height/2);

                    frame.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
                    frame.fillStyle = this.color;
                    frame.fill();

                    this.position.x += this.dx;
                    this.position.y += this.dy;
                }
            }

            function Color() {
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                return "#" + randomColor;
            }

            function Position() {
                position = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                };
                return position;
            }

            var balls = [];
            let n = 20;

            for (let i = 0; i < n; i++) {
                balls[balls.length] = new Obstacle(Position());
            }

            setInterval(function() {
                frame.clearRect(0, 0, canvas.width, canvas.height);
                for (let j = 0; j < n; j++) {
                    balls[j].Movement();
                }
            }, 10);

            function frq()
                {
                    if (document.querySelector('input').value === words[a]) {
                        document.querySelector('input').style.backgroundColor = 'green';
                        document.querySelector('#result').innerHTML = 'Correct!';
                    } else {
                        document.querySelector('input').style.backgroundColor = 'red';
                        document.querySelector('#result').innerHTML = 'Incorrect';
                    }
                }

            document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('#answer').addEventListener('click', frq);
            });
