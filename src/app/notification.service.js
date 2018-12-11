class NotificationService {
    constructor(Notification) {
        this.Notification = Notification;
    }

    success(message, titulo) {
        this.Notification.success({titulo, message});
    }

    info(message, titulo) {
        this.Notification.info({titulo, message});
    }

    warning(message, titulo) {
        this.Notification.warning({titulo, message});
    }
}

// Notification(), Notification.primary()	Show the message with bootstrap's primary class
// Notification.info()	Show the message with bootstrap's info class
// Notification.success()	Show the message with bootstrap's success class
// Notification.warning()	Show the message with bootstrap's warn class
// Notification.error()	Show the message with bootstrap's danger class
// Notification.clearAll()

NotificationService.$inject = ['Notification'];

module.exports = NotificationService;
