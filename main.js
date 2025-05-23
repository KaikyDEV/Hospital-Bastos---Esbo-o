let selectedDonationAmount = 0;

        function selectDonation(amount) {
            selectedDonationAmount = amount;
            document.getElementById('selectedAmount').textContent = amount;

            // Remove active class from all buttons
            document.querySelectorAll('.donation-btn').forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            event.target.classList.add('active');

            // Hide custom amount input
            document.getElementById('customAmount').classList.add('hidden');
        }

        function toggleCustomAmount() {
            const customDiv = document.getElementById('customAmount');
            customDiv.classList.toggle('hidden');

            if (!customDiv.classList.contains('hidden')) {
                document.getElementById('customValue').focus();
                document.getElementById('customValue').addEventListener('input', function() {
                    selectedDonationAmount = parseFloat(this.value) || 0;
                    document.getElementById('selectedAmount').textContent = selectedDonationAmount;
                });
            }

            // Remove active class from all donation buttons
            document.querySelectorAll('.donation-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        function generatePix() {
            if (selectedDonationAmount > 0) {
                alert(PIX gerado para doação de R$ ${selectedDonationAmount}\n\nEm breve você receberá o código PIX para realizar a doação.\n\nObrigado pela sua generosidade!);
            } else {
                alert('Por favor, selecione um valor para doação.');
            }
        }

        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            alert('Mensagem enviada com sucesso!\n\nEntraremos em contato em breve.\n\nObrigado!');
            this.reset();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
