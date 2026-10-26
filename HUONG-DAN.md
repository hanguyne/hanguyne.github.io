# Đưa blog lên GitHub Pages — hướng dẫn từng bước

Kết quả: blog chạy miễn phí 24/7 tại `https://TEN-TAI-KHOAN.github.io`, viết bài trên trình duyệt bằng Pages CMS, bài hẹn giờ tự lên lúc **7:05 sáng Chủ nhật**.

Toàn bộ mã nguồn nằm trong thư mục `github-pages/` (thư mục chứa file này).

---

## Bước 1 — Tạo tài khoản GitHub

1. Vào **github.com/signup** và đăng ký bằng email của bạn (miễn phí).
2. **Tên tài khoản (username)** sẽ trở thành địa chỉ web: username `nguyenvana` cho địa chỉ `nguyenvana.github.io`. Nên chọn tên ngắn, dễ nhớ, chỉ gồm chữ thường, số và dấu `-`.

## Bước 2 — Sửa 3 dòng trong `_config.yml`

Mở `github-pages/_config.yml` bằng Notepad (chuột phải › Mở bằng › Notepad) và sửa các dòng có chú thích `SỬA`:

```yaml
title: "Nhật ký của Nguyễn Văn A"
url: "https://nguyenvana.github.io"
author: "Nguyễn Văn A"
```

Lưu file. Khi Notepad hỏi định dạng, giữ nguyên **UTF-8**.

## Bước 3 — Tạo kho (repository)

1. Trên GitHub, bấm **+** (góc trên phải) › **New repository**.
2. **Repository name**: gõ chính xác `TEN-TAI-KHOAN.github.io`, ví dụ `nguyenvana.github.io`.
3. Chọn **Public**. Không tích "Add a README".
4. Bấm **Create repository**.

## Bước 4 — Tải mã nguồn lên

1. Ở trang kho vừa tạo, bấm link **uploading an existing file**.
2. Mở thư mục `github-pages` trong File Explorer.
   - Bật **Xem › Hiện › Mục bị ẩn** để thấy thư mục `.github` và file `.pages.yml`.
3. Chọn **tất cả** bên trong thư mục (Ctrl+A) và kéo thả vào trang GitHub. Kéo các thứ *bên trong*, không kéo cả thư mục `github-pages`.
4. Đợi tải xong, bấm **Commit changes**.
5. **Kiểm tra:** trong kho phải có thư mục `.github` và file `.pages.yml`. Nếu thiếu, tạo tay như sau:
   - **Add file › Create new file**.
   - Gõ tên `.github/workflows/pages.yml`, dán nội dung của file đó, rồi **Commit changes**.
   - Làm tương tự cho `.pages.yml` nếu file này cũng thiếu.

## Bước 5 — Bật GitHub Pages

**Settings** (của kho) › **Pages** › mục *Build and deployment* › **Source**: chọn **GitHub Actions**.

## Bước 6 — Đăng site lần đầu

1. Vào tab **Actions** › chọn **Dựng và đăng site** › **Run workflow** › **Run workflow**.
2. Chờ 1–2 phút tới khi hiện dấu ✓ xanh.
3. Mở `https://TEN-TAI-KHOAN.github.io`. Blog đã lên mạng, kèm một bài mẫu và một dự án mẫu.

**Nếu hiện dấu ✗ đỏ:** bấm vào lần chạy bị lỗi › bấm bước bị đỏ › chụp màn hình phần chữ đỏ và gửi mình.

## Bước 7 — Mở trang quản trị Pages CMS

1. Vào **app.pagescms.org** › **Sign in with GitHub**.
2. Cho phép Pages CMS truy cập. Khi được hỏi cài app, chọn **Only select repositories** và chọn kho `TEN-TAI-KHOAN.github.io`.
3. Chọn kho, nhánh **main**. Thanh bên trái sẽ có:
   - **Bài viết**: viết và hẹn giờ bài.
   - **Dự án**: thêm, sửa dự án.
   - **Trang Giới thiệu**.
   - **Thông tin của bạn**: tên, ảnh đại diện, lời chào trang chủ, link mạng xã hội. **Điền mục này trước tiên.**

Mỗi lần bấm **Save**, site tự dựng lại và cập nhật sau khoảng 1–2 phút.

## Bước 8 — Viết nhật ký tuần, đăng vào Chủ nhật

1. **Bài viết** › **Add an entry**.
2. Điền:
   - **Tiêu đề**: dạng `Tuần 44 (26/10–1/11) — …`
   - **Ngày đăng**: chọn **Chủ nhật 07:00** của tuần đó.
   - **Chuyên mục**: Nhật ký hằng tuần.
   - **Thẻ**, **Ảnh bìa**, **Tóm tắt**.
3. Viết **Nội dung** theo khung: *Tuần này mình đã làm gì / Điều học được / Tiến độ dự án / Kế hoạch tuần tới*. Mở bài mẫu để chép khung.
4. Bấm **Save**. Bài có ngày trong tương lai sẽ **chưa hiện**. Đúng 7:05 sáng Chủ nhật, site tự dựng lại và bài lên.

Khi đã có bài thật, hãy xóa bài mẫu và dự án mẫu.

## Bước 9 — Bật form liên hệ (Formspree, miễn phí)

1. Đăng ký tại **formspree.io** › **New form**, đặt tên "Blog".
2. Chép **mã form**: phần chữ sau `/f/` trong đường link, ví dụ `xyzabcd`.
3. Trên GitHub, mở `_config.yml` › bấm ✎ (Edit), sửa thành `formspree_id: "xyzabcd"` › **Commit changes**.
4. Gửi thử một lời nhắn ở trang Liên hệ. Formspree sẽ email cho bạn để xác nhận lần đầu.

## Bước 10 — Bật bình luận (Giscus, miễn phí)

1. **Settings** của kho › **General** › mục *Features* › tích **Discussions**.
2. Cài app Giscus: vào **github.com/apps/giscus** › **Install** › chọn kho blog.
3. Vào **giscus.app**:
   - Mục *Repository* gõ `TEN-TAI-KHOAN/TEN-TAI-KHOAN.github.io`.
   - Mục *Discussion Category* chọn **Announcements**.
4. Kéo xuống phần mã `<script …>` và chép giá trị `data-repo-id` và `data-category-id`.
5. Sửa `_config.yml` trên GitHub như sau rồi **Commit changes**:

```yaml
giscus:
  repo: "TEN-TAI-KHOAN/TEN-TAI-KHOAN.github.io"
  repo_id: "R_xxxxxxxx"
  category: "Announcements"
  category_id: "DIC_xxxxxxxx"
```

Người đọc cần tài khoản GitHub để bình luận.

---

## Lưu ý

- **Kho là công khai.** Ai cũng xem được mã nguồn, kể cả bài đã hẹn giờ mà chưa tới Chủ nhật. Đừng để thông tin riêng tư trong bài.
- **Lịch tự đăng có thể bị tạm dừng.** GitHub tạm dừng lịch chạy tự động nếu kho **60 ngày** không có thay đổi. Viết đều mỗi tuần thì không gặp chuyện này. Nếu nhận email báo tạm dừng, vào tab **Actions** › chọn workflow › **Enable workflow**.
- **Tên miền riêng (tùy chọn, có phí theo năm):** mua tên miền, rồi vào **Settings › Pages › Custom domain** để gắn vào.
- **Thêm chuyên mục mới:** thêm một mục vào `_data/chuyen_muc.yml`, chép một file trong thư mục `chuyen-muc/` và đổi tên, `title`, `permalink`, rồi thêm tên chuyên mục vào danh sách trong `.pages.yml`.
