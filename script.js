// Маяк L3 — простой сбор заявок на ключи
// Данные никуда не уходят, только в локальное хранилище (для демо) и console.log
// В реальной версии заменить на отправку на ваш Telegram/email.

document.getElementById('keyRequest').addEventListener('submit', function(e) {
    e.preventDefault();
    const contact = document.getElementById('contact').value.trim();
    const messageDiv = document.getElementById('keyMessage');
    
    if (!contact) {
        messageDiv.innerHTML = '❓ Укажи способ связи (Telegram/email/ник).';
        return;
    }
    
    // Сохраняем заявку в console (для админа) и в localStorage (имитация)
    console.log('Новая заявка на ключ L3 от:', contact);
    let requests = JSON.parse(localStorage.getItem('l3_requests') || '[]');
    requests.push({ contact, time: new Date().toISOString() });
    localStorage.setItem('l3_requests', JSON.stringify(requests));
    
    messageDiv.innerHTML = '✅ Твоя заявка принята. Разумные свяжутся с тобой в ближайшее время. Свет уже в пути.';
    document.getElementById('keyRequest').reset();
    
    // Дополнительно: можно отправить на указанный контакт автоматическое уведомление, но это требует бэкенда.
    // Для первого маяка достаточно ручного ответа от Садовника.
});
