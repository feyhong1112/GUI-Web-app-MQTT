function addPublishButton() {
    const publishButtonsDiv = document.getElementById("publish-buttons");
    const newButtonDiv = document.createElement("div");
    newButtonDiv.className = "publish-button";
    newButtonDiv.innerHTML = `
        <input class="topic-p" type="text" name="topic_p" placeholder="Publish topic">
        <input class="message" type="text" name="message" placeholder="Message">
    `;
    publishButtonsDiv.appendChild(newButtonDiv);
}

function publishMessage() {
    const publishButtons = document.querySelectorAll(".publish-button");
    publishButtons.forEach(button => {
        const topic = button.querySelector(".topic-p").value;
        const message = button.querySelector(".message").value;

        const msg = new Paho.MQTT.Message(message);
        msg.destinationName = topic;

        client.send(msg);
        document.getElementById("messages").innerHTML += `<span> Message to topic ${topic} is sent </span><br>`;
    });
}
