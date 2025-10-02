# Simple Chatbot - Tự Huấn Luyện

Chatbot đơn giản cho phép bạn tự huấn luyện với câu hỏi-trả lời.

## Cài Đặt

```bash
# Không cần cài thư viện gì thêm, Python built-in
python simple_chatbot.py
```

## Cách Sử Dụng

### 1. Chạy chatbot
```bash
python simple_chatbot.py
```

### 2. Các lệnh:
- **`train`** - Vào chế độ huấn luyện
- **`show`** - Xem tất cả kiến thức đã học
- **`quit`** - Thoát chương trình

### 3. Huấn luyện bot:
```
Bạn: train
Câu hỏi: Hôm nay thứ mấy?
Câu trả lời: Hôm nay là thứ 5
Câu hỏi: done
```

### 4. Chat thử:
```
Bạn: Hôm nay thứ mấy?
Bot: Hôm nay là thứ 5
```

### 5. Dạy ngay khi bot không biết:
```
Bạn: Bạn thích gì?
Bot: Xin lỗi, tôi chưa biết câu trả lời. Bạn có muốn dạy tôi không? (y/n)
     y
     Câu trả lời là gì? Tôi thích học hỏi!
✓ Đã học: 'Bạn thích gì?' -> 'Tôi thích học hỏi!'
```

## Tính Năng

✅ Học câu hỏi-trả lời đơn giản
✅ Lưu kiến thức vào file JSON
✅ Tìm kiếm câu trả lời gần đúng (fuzzy matching)
✅ Dễ dàng thêm/sửa kiến thức
✅ Không cần GPU, chạy trên máy yếu

## File

- `simple_chatbot.py` - Code chính
- `chatbot_knowledge.json` - Lưu trữ kiến thức (tự động tạo)

## Nâng Cấp (Tùy Chọn)

Nếu muốn chatbot thông minh hơn, có thể:
1. Thêm AI model (BERT, GPT)
2. Kết nối database
3. Thêm context/memory
4. Web interface (Flask/Streamlit)

## Ví Dụ Sử Dụng

```python
from simple_chatbot import SimpleChatbot

# Tạo bot
bot = SimpleChatbot()

# Thêm kiến thức
bot.add_qa("Giá Bitcoin bao nhiêu?", "Tôi không biết giá real-time, bạn check Binance nhé!")

# Chat
response = bot.chat("Giá Bitcoin bao nhiêu?")
print(response)
```
