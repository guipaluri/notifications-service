import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Você recebeu uma nova solicitação de amizade'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
