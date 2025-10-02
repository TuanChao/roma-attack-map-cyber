import json
import re
from difflib import get_close_matches

class SimpleChatbot:
    def __init__(self, knowledge_file='chatbot_knowledge.json'):
        self.knowledge_file = knowledge_file
        self.knowledge_base = self.load_knowledge()

    def load_knowledge(self):
        """Load knowledge base from JSON file"""
        try:
            with open(self.knowledge_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            return {"qa_pairs": []}

    def save_knowledge(self):
        """Save knowledge base to JSON file"""
        with open(self.knowledge_file, 'w', encoding='utf-8') as f:
            json.dump(self.knowledge_base, f, ensure_ascii=False, indent=2)

    def normalize_text(self, text):
        """Normalize text for better matching"""
        text = text.lower().strip()
        text = re.sub(r'[^\w\s]', '', text)
        return text

    def find_answer(self, question):
        """Find answer for a question"""
        normalized_question = self.normalize_text(question)

        # Exact match
        for pair in self.knowledge_base['qa_pairs']:
            if self.normalize_text(pair['question']) == normalized_question:
                return pair['answer']

        # Fuzzy match
        questions = [pair['question'] for pair in self.knowledge_base['qa_pairs']]
        matches = get_close_matches(question, questions, n=1, cutoff=0.6)

        if matches:
            for pair in self.knowledge_base['qa_pairs']:
                if pair['question'] == matches[0]:
                    return pair['answer']

        return None

    def add_qa(self, question, answer):
        """Add new question-answer pair"""
        self.knowledge_base['qa_pairs'].append({
            'question': question,
            'answer': answer
        })
        self.save_knowledge()
        print(f"✓ Đã học: '{question}' -> '{answer}'")

    def chat(self, user_input):
        """Main chat function"""
        answer = self.find_answer(user_input)

        if answer:
            return answer
        else:
            return None

    def train_mode(self):
        """Interactive training mode"""
        print("\n=== CHẾ ĐỘ HUẤN LUYỆN ===")
        print("Nhập câu hỏi và câu trả lời để dạy bot")
        print("Gõ 'done' để kết thúc huấn luyện\n")

        while True:
            question = input("Câu hỏi: ").strip()
            if question.lower() == 'done':
                break

            answer = input("Câu trả lời: ").strip()
            if answer.lower() == 'done':
                break

            if question and answer:
                self.add_qa(question, answer)
            else:
                print("⚠ Vui lòng nhập đầy đủ câu hỏi và câu trả lời\n")

        print(f"\n✓ Đã huấn luyện xong! Bot biết {len(self.knowledge_base['qa_pairs'])} câu hỏi\n")

    def show_knowledge(self):
        """Display all learned Q&A pairs"""
        if not self.knowledge_base['qa_pairs']:
            print("Bot chưa học gì cả!")
            return

        print(f"\n=== KIẾN THỨC CỦA BOT ({len(self.knowledge_base['qa_pairs'])} câu) ===")
        for i, pair in enumerate(self.knowledge_base['qa_pairs'], 1):
            print(f"{i}. Q: {pair['question']}")
            print(f"   A: {pair['answer']}\n")


def main():
    bot = SimpleChatbot()

    print("=" * 50)
    print("     SIMPLE CHATBOT - Tự huấn luyện")
    print("=" * 50)
    print("\nLệnh:")
    print("  'train'  - Huấn luyện bot")
    print("  'show'   - Xem kiến thức đã học")
    print("  'quit'   - Thoát")
    print("\nBắt đầu chat ngay hoặc gõ lệnh trên!\n")

    while True:
        user_input = input("Bạn: ").strip()

        if not user_input:
            continue

        if user_input.lower() in ['quit', 'exit', 'thoát']:
            print("Tạm biệt! 👋")
            break

        if user_input.lower() == 'train':
            bot.train_mode()
            continue

        if user_input.lower() == 'show':
            bot.show_knowledge()
            continue

        # Chat
        response = bot.chat(user_input)

        if response:
            print(f"Bot: {response}\n")
        else:
            print("Bot: Xin lỗi, tôi chưa biết câu trả lời. Bạn có muốn dạy tôi không? (y/n)")
            teach = input("     ").strip().lower()

            if teach == 'y':
                answer = input("     Câu trả lời là gì? ")
                bot.add_qa(user_input, answer)
                print()
            else:
                print()


if __name__ == "__main__":
    main()
