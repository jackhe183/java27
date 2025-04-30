import { useChatStore } from '@/store';
export function useChat() {
    const chatStore = useChatStore();
    const getChatByUuidAndIndex = (uuid, index) => {
        return chatStore.getChatByUuidAndIndex(uuid, index);
    };
    const addChat = (uuid, chat) => {
        chatStore.addChatByUuid(uuid, chat);
    };
    const updateChat = (uuid, index, chat) => {
        chatStore.updateChatByUuid(uuid, index, chat);
    };
    const updateChatSome = (uuid, index, chat) => {
        chatStore.updateChatSomeByUuid(uuid, index, chat);
    };
    return {
        addChat,
        updateChat,
        updateChatSome,
        getChatByUuidAndIndex,
    };
}
//# sourceMappingURL=useChat.js.map