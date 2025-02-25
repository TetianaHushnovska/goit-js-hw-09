const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputUpdate);
form.addEventListener('submit', handleSubmit);

function inputUpdate(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkForm() {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        form.email.value = parsedData.email || '';
        form.message.value = parsedData.message || '';

        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
    }
}

checkForm();

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert(`Please fill all fields!`);
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
}
