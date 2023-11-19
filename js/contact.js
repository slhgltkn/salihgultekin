function SendMail() {
    var email = document.getElementById("email_id").value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
        document.getElementById('submit-button').disabled = true;

        var params = {
            from_name: document.getElementById("fullName").value,
            email_id: email,
            message: document.getElementById("message").value,
        }

        emailjs.send("service_cqhundd", "template_aq2n9gq", params).then(function (res) {
            Swal.fire({
                title: 'Teşekkür Ederim!',
                text: 'Benimle İletişime Geçtiğiniz İçin Teşekkür Ederim. En Kısa Sürede Dönüş Yapacağım!',
                icon: 'success',
                confirmButtonText: 'Tamam'
            });
        }).catch(function (error) {
            document.getElementById('submit-button').disabled = false;
        });
    } else {
        Swal.fire({
            title: 'Hata!',
            text: 'Lütfen geçerli bir e-posta adresi girin.',
            icon: 'error',
            confirmButtonText: 'Tamam'
        });

    }
}
