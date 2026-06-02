const form = document.getElementById('form');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const img = document.getElementById('qr-code');
const resultText = document.getElementById('resultText');

const setGenerating = (isGenerating) => {
    btn.disabled = isGenerating;
    btn.textContent = isGenerating ? 'Generating...' : 'Generate';
};

function generateQR(event) {
    event.preventDefault();

    const value = text.value.trim();

    if (!value) {
        return;
    }

    setGenerating(true);

    img.onload = () => {
        resultText.textContent = 'QR code generated.';
        setGenerating(false);
    };

    img.onerror = () => {
        resultText.textContent = 'Could not generate the QR code. Please try again.';
        img.hidden = true;
        setGenerating(false);
    };

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(value)}`;
    img.hidden = false;

    form.reset();
}

form.addEventListener('submit', generateQR);
