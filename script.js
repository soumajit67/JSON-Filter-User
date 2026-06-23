const container = document.getElementById("users");

container.innerHTML = `<h2 class="loading">Loading Users...</h2>`;

fetch("https://dummyjson.com/users/filter?key=hair.color&value=Brown")
    .then(res => res.json())
    .then(data => {

        container.innerHTML = "";

        data.users.forEach(user => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <div class="card-header">
                    <img src="${user.image}" alt="${user.firstName}">
                    <h2>${user.firstName} ${user.lastName}</h2>
                </div>

                <div class="card-body">

                    <div class="info">
                        <span>Age</span>
                        <span>${user.age}</span>
                    </div>

                    <div class="info">
                        <span>Gender</span>
                        <span>${user.gender}</span>
                    </div>

                    <div class="info">
                        <span>Email</span>
                        <span>${user.email}</span>
                    </div>

                    <div class="info">
                        <span>Phone</span>
                        <span>${user.phone}</span>
                    </div>

                    <div class="info">
                        <span>University</span>
                        <span>${user.university}</span>
                    </div>

                    <div class="info">
                        <span>Company</span>
                        <span>${user.company.name}</span>
                    </div>

                    <div class="info">
                        <span>Department</span>
                        <span>${user.company.department}</span>
                    </div>

                    <div class="info">
                        <span>Hair</span>
                        <span>${user.hair.color} (${user.hair.type})</span>
                    </div>

                    <div class="info">
                        <span>Address</span>
                        <span>${user.address.city}, ${user.address.state}</span>
                    </div>

                </div>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => {

        container.innerHTML = `
            <h2 class="error">
                Failed to load data.<br>
                ${error.message}
            </h2>
        `;

        console.error(error);
    });