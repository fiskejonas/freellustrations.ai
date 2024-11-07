-- Insert Users
INSERT INTO users (username, email, password_hash, bio, created_at, is_admin)
VALUES
  ('john_doe', 'john@example.com', 'hashed_password_1', 'Hello, I am John!', UNIX_TIMESTAMP(), FALSE),
  ('jane_smith', 'jane@example.com', 'hashed_password_2', 'Hi, I am Jane!', UNIX_TIMESTAMP(), TRUE),
  ('bob_jones', 'bob@example.com', 'hashed_password_3', 'Hey, I am Bob!', UNIX_TIMESTAMP(), FALSE);

-- Insert Posts
INSERT INTO posts (user_id, image_url, title, description, created_at)
VALUES
  (1, 'http://example.com/image1.jpg', 'John\'s First Post', 'This is John\'s first post.', UNIX_TIMESTAMP()),
  (2, 'http://example.com/image2.jpg', 'Jane\'s First Post', 'This is Jane\'s first post.', UNIX_TIMESTAMP()),
  (3, 'http://example.com/image3.jpg', 'Bob\'s First Post', 'This is Bob\'s first post.', UNIX_TIMESTAMP());

-- Insert Tags
INSERT INTO tags (name)
VALUES
  ('Technology'),
  ('Health'),
  ('Lifestyle'),
  ('Education');

-- Insert Post Tags
INSERT INTO post_tags (post_id, tag_id)
VALUES
  (1, 1),  -- John’s post tagged with Technology
  (2, 2),  -- Jane’s post tagged with Health
  (3, 3),  -- Bob’s post tagged with Lifestyle
  (1, 4);  -- John’s post tagged with Education

-- Insert Followers
INSERT INTO followers (follower_id, followee_id, created_at)
VALUES
  (1, 2, UNIX_TIMESTAMP()),  -- John follows Jane
  (2, 3, UNIX_TIMESTAMP()),  -- Jane follows Bob
  (3, 1, UNIX_TIMESTAMP());  -- Bob follows John

-- Insert Password Resets
INSERT INTO password_resets (user_id, token, expires_at, created_at)
VALUES
  (1, 'reset_token_1', UNIX_TIMESTAMP() + 3600, UNIX_TIMESTAMP()),  -- Reset token for John
  (2, 'reset_token_2', UNIX_TIMESTAMP() + 3600, UNIX_TIMESTAMP());  -- Reset token for Jane

-- Insert Likes
INSERT INTO likes (user_id, post_id, created_at)
VALUES
  (1, 2, UNIX_TIMESTAMP()),  -- John likes Jane's post
  (2, 3, UNIX_TIMESTAMP()),  -- Jane likes Bob's post
  (3, 1, UNIX_TIMESTAMP());  -- Bob likes John's post

-- Insert Comments
INSERT INTO comments (user_id, post_id, content, created_at)
VALUES
  (1, 2, 'Great post, Jane!', UNIX_TIMESTAMP()),  -- John comments on Jane's post
  (2, 3, 'Nice work, Bob!', UNIX_TIMESTAMP()),   -- Jane comments on Bob's post
  (3, 1, 'Interesting, John!', UNIX_TIMESTAMP()); -- Bob comments on John's post

-- Insert Views
INSERT INTO views (user_id, post_id, viewed_at)
VALUES
  (1, 2, UNIX_TIMESTAMP()),  -- John views Jane's post
  (2, 3, UNIX_TIMESTAMP()),  -- Jane views Bob's post
  (3, 1, UNIX_TIMESTAMP());  -- Bob views John's post
