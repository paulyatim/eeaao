const wait = async (ms) => {
    await new Promise(resolve => {
        return setTimeout(resolve, ms)
    });
};

async function waitExp() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('OK... Te espero...'))
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(5000);
    var message2 = document.createElement("p");
    message2.appendChild(document.createTextNode('Ahora sí?'))
    content.appendChild(message2);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var yesBtn = document.createElement('button');
    yesBtn.appendChild(document.createTextNode('Bueno dale'));
    yesBtn.addEventListener('click', startExp);
    options.appendChild(yesBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function startExp() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('Bueno... Primero vas a tener que relajarte y simplemente ser una roca, entendido?'));
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var yesBtn = document.createElement('button');
    yesBtn.appendChild(document.createTextNode('OK... ponele'));
    yesBtn.addEventListener('click', relaxed);
    options.appendChild(yesBtn);
    var noBtn = document.createElement('button');
    noBtn.appendChild(document.createTextNode('No'));
    noBtn.addEventListener('click', notRelaxed);
    options.appendChild(noBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function notRelaxed() {
    var message = document.createElement("p");
    await wait(500);
    message.appendChild(document.createTextNode('Era... una pregunta capciosa. Solo dale a OK.'));
    document.getElementById('messageBox').appendChild(message);
}
async function relaxed() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(4000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('Che...'));
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    var message2 = document.createElement('p');
    message2.appendChild(document.createTextNode('Ya que estas acá...'));
    content.replaceChildren(message2);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    var message3 = document.createElement('p');
    content.replaceChildren(message3);
    message3.appendChild(document.createTextNode('Está bueno el sitio, no?'));
    content.replaceChildren(message3);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var likedBtn = document.createElement('button');
    likedBtn.appendChild(document.createTextNode('Sí! Está buenísimo!'));
    likedBtn.addEventListener('click', liked);
    options.appendChild(likedBtn);
    var notLikedBtn = document.createElement('button');
    notLikedBtn.appendChild(document.createTextNode('Eh... maso'));
    notLikedBtn.addEventListener('click', notLiked);
    options.appendChild(notLikedBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function notLiked() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('Oh! Qué lástima que no te gustó. Bueno, tranquilx que no te juzgo.'));
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    var message3 = document.createElement('p');
    message3.appendChild(document.createTextNode(' (bueno en realidad un poco sí)'));
    content.replaceChildren(message3);
    await wait(1500);
    var message2 = document.createElement("p");
    document.getElementById('messageBox').replaceChildren('');
    await wait(1000);
    content.replaceChildren('');
    message2.appendChild(document.createTextNode('¿Te animás a decirme qué fue lo que no te gustó?'));
    content.appendChild(message2);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var yesBtn = document.createElement('button');
    yesBtn.appendChild(document.createTextNode('OK...'));
    yesBtn.addEventListener('click', tellMeBad);
    options.appendChild(yesBtn);
    var noBtn = document.createElement('button');
    noBtn.appendChild(document.createTextNode('No...'));
    noBtn.addEventListener('click', notTellMeBad);
    options.appendChild(noBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function tellMeBad() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('OK... me podes escribir a @paulyatim en Instagram y contarme qué cambiarías.'))
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    var message2 = document.createElement("p");
    message2.appendChild(document.createTextNode('Bueno ahora si querés te dejo solx para que puedas ser una roca.'));
    content.appendChild(message2);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(8000);
    var message3 = document.createElement("p");
    message3.appendChild(document.createTextNode('Bueno...'));
    content.appendChild(message3);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(2000);
    var message4 = document.createElement("p");
    message4.appendChild(document.createTextNode(' Chau :)'));
    content.appendChild(message4);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var restartBtn = document.createElement('button');
    restartBtn.appendChild(document.createTextNode('Volver a empezar'));
    restartBtn.addEventListener('click', restart);
    options.appendChild(restartBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function notTellMeBad() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('Ah... eso pensé...'))
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(2000);
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    content.replaceChildren('');
    var message5 = document.createElement("p");
    message5.appendChild(document.createTextNode('Igual, si llegas a cambiar de opinión me podés escribir a @paulyatim en Instagram.'));
    content.appendChild(message5);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    var message2 = document.createElement("p");
    message2.appendChild(document.createTextNode('Bueno ahora si querés te dejo solx para que puedas ser una roca.'));
    content.appendChild(message2);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(8000);
    var message3 = document.createElement("p");
    message3.appendChild(document.createTextNode('Bueno...'));
    content.appendChild(message3);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(2000);
    var message4 = document.createElement("p");
    message4.appendChild(document.createTextNode(' Chau :)'));
    content.appendChild(message4);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var restartBtn = document.createElement('button');
    restartBtn.appendChild(document.createTextNode('Volver a empezar'));
    restartBtn.addEventListener('click', restart);
    options.appendChild(restartBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function liked() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('Yay! Me alegra! Me esforcé mucho la verdad.'));
    var content = document.createElement('div');
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    document.getElementById('messageBox').replaceChildren('');
    var message2 = document.createElement("p");
    await wait(2000);
    content.replaceChildren('');
    message2.appendChild(document.createTextNode('Si tenés algún comentario no dudes en escribirme a @paulyatim en Instagram :)'));
    content.appendChild(message2);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(4000);
    var message5 = document.createElement("p");
    message5.appendChild(document.createTextNode('Bueno ahora si querés te dejo solx para que puedas ser una roca.'));
    content.appendChild(message5);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(8000);
    var message3 = document.createElement("p");
    message3.appendChild(document.createTextNode('Bueno...'));
    content.appendChild(message3);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(2000);
    var message4 = document.createElement("p");
    message4.appendChild(document.createTextNode(' Chau :)'));
    content.appendChild(message4);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var restartBtn = document.createElement('button');
    restartBtn.appendChild(document.createTextNode('Volver a empezar'));
    restartBtn.addEventListener('click', restart);
    options.appendChild(restartBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
async function restart() {
    document.getElementById('messageBox').replaceChildren('');
    await wait(2000);
    var content = document.createElement('div');
    var message = document.createElement("p");
    message.appendChild(document.createTextNode('Hola! Soy Paul.'));
    content.appendChild(message);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(2000);
    var message2 = document.createElement("p");
    message2.appendChild(document.createTextNode('Bienvenidx al universo en el que todxs somos rocas.'));
    content.appendChild(message2);
    document.getElementById('messageBox').replaceChildren(content);
    await wait(3000);
    var message3 = document.createElement("p");
    message3.appendChild(document.createTextNode('¿Estás listx para arrancar la experiencia?'));
    content.appendChild(message3);
    document.getElementById('messageBox').replaceChildren(content);
    var options = document.createElement('div');
    options.className = 'options';
    var yesBtn = document.createElement('button');
    yesBtn.appendChild(document.createTextNode('Dale!'));
    yesBtn.addEventListener('click', startExp);
    options.appendChild(yesBtn);
    var noBtn = document.createElement('button');
    noBtn.appendChild(document.createTextNode('No, espera!'));
    noBtn.addEventListener('click', waitExp);
    options.appendChild(noBtn);
    content.appendChild(options);
    document.getElementById('messageBox').replaceChildren(content);
}
