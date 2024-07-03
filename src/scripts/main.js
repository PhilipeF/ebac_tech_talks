const dataDoEvento = new Date("Apri 04, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const constaAsHoras = setInterval(() => {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMS = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutosEmms = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmms);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmms) / 1000);

  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    document.getElementById('contador').innerHTML = 'Evento Expirado';
  }
}, 1000);