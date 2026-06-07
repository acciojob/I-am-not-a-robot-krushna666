//your code here
 const images = [
            "https://via.placeholder.com/120?text=1",
            "https://via.placeholder.com/120?text=2",
            "https://via.placeholder.com/120?text=3",
            "https://via.placeholder.com/120?text=4",
            "https://via.placeholder.com/120?text=5"
        ];

        const container = document.getElementById("image-container");
        const resetBtn = document.getElementById("reset");
        const verifyBtn = document.getElementById("verify");
        const para = document.getElementById("para");

        let selected = [];

        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        function initialize() {
            container.innerHTML = "";
            para.textContent = "";
            selected = [];

            resetBtn.style.display = "none";
            verifyBtn.style.display = "none";

            let duplicateIndex = Math.floor(Math.random() * 5);

            let displayImages = [...images];
            displayImages.push(images[duplicateIndex]);

            shuffle(displayImages);

            displayImages.forEach((src, index) => {
                const img = document.createElement("img");

                img.src = src;
                img.dataset.value = src;
                img.classList.add(`img${index + 1}`);

                img.addEventListener("click", function () {

                    if (selected.includes(img) || selected.length >= 2) {
                        return;
                    }

                    img.classList.add("selected");
                    selected.push(img);

                    resetBtn.style.display = "inline-block";

                    if (selected.length === 2) {
                        verifyBtn.style.display = "inline-block";
                    }
                });

                container.appendChild(img);
            });
        }

        resetBtn.addEventListener("click", () => {
            initialize();
        });

        verifyBtn.addEventListener("click", () => {

            verifyBtn.style.display = "none";

            if (
                selected[0].dataset.value ===
                selected[1].dataset.value
            ) {
                para.textContent =
                    "You are a human. Congratulations!";
            } else {
                para.textContent =
                    "We can't verify you as a human. You selected the non-identical tiles.";
            }
        });

        initialize();
