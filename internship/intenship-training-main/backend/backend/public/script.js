async function getData() {

    const response = await fetch("/api/data");

    const data = await response.json();

    document.getElementById("result").innerHTML =
        `
        Name: ${data.name} <br>
        Course: ${data.course} <br>
        Message: ${data.message}
        `;
}