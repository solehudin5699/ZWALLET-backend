-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Agu 2020 pada 17.18
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.7

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone
= "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category_table`
--

CREATE TABLE `category_table`
(
  `category_id` int
(11) NOT NULL,
  `category_name` varchar
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category_table`
--

INSERT INTO `category_table` (`
category_id`,
`category_name
`) VALUES
(1, 'Makanan Khas Jawa Barat'),
(2, 'Makanan Khas Banten');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history_table`
--

CREATE TABLE `history_table`
(
  `order_id` int
(11) NOT NULL,
  `invoices` varchar
(12) NOT NULL,
  `cashier` text NOT NULL,
  `order_dates` timestamp NOT NULL DEFAULT current_timestamp
(),
  `product_id` int
(11) NOT NULL,
  `quantity` int
(11) NOT NULL,
  `amount` int
(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history_table`
--

INSERT INTO `history_table` (`
order_id`,
`invoices
`, `cashier`, `order_dates`, `product_id`, `quantity`, `amount`) VALUES
(2, '222', 'Soleh', '2020-08-01 17:00:00', 2, 3, 30000),
(3, '99', 'Name Cashier', '2020-08-02 16:17:12', 1, 11, 10000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `level_users`
--

CREATE TABLE `level_users`
(
  `level_id` int
(11) NOT NULL,
  `level_name` varchar
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_table`
--

CREATE TABLE `order_table`
(
  `order_id` int
(11) NOT NULL,
  `product_order` varchar
(255) NOT NULL,
  `quality_order` varchar
(255) NOT NULL,
  `total_price` int
(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp
()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `order_table`
--

INSERT INTO `order_table` (`
order_id`,
`product_order
`, `quality_order`, `total_price`, `order_date`) VALUES
(1, 'Angeun Lada,Cireng,Batagor dan Siomay', '3,1,1', 0, '2020-08-10 06:18:08'),
(2, 'Cireng', '1', 0, '2020-08-10 06:26:56'),
(3, 'Emping Melinjo', '1', 0, '2020-08-10 06:31:13'),
(4, 'Angeun Lada,Cireng,Empal Gentong', '1,1,1', 0, '2020-08-10 06:36:39'),
(5, 'Angeun Lada', '1', 0, '2020-08-10 06:38:49'),
(6, 'Angeun Lada,Cireng', '1,1', 0, '2020-08-10 06:43:06'),
(7, 'Batagor dan Siomay', '1', 0, '2020-08-10 06:47:24'),
(8, 'Emping Melinjo', '1', 0, '2020-08-10 06:52:06'),
(9, 'Batagor dan Siomay', '1', 0, '2020-08-10 06:54:20'),
(10, 'Cireng,Angeun Lada', '1,1', 0, '2020-08-10 06:56:15'),
(11, 'Angeun Lada', '1', 0, '2020-08-10 07:12:00'),
(12, 'Cireng,Batagor dan Siomay,Angeun Lada', '2,1,1', 0, '2020-08-10 07:54:56'),
(13, 'Cireng,Hayam Bakakak,Lepet', '1,1,1', 0, '2020-08-16 00:15:44'),
(14, 'Leumeung', '1', 0, '2020-08-16 00:16:54'),
(15, 'Lepet,Kue Jojorong', '1,1', 0, '2020-08-16 00:17:59'),
(16, 'Kue Jojorong,Kerupuk Melarat', '1,1', 0, '2020-08-16 00:19:57'),
(17, 'Kerupuk Melarat,Cireng', '1,1', 0, '2020-08-16 00:20:32'),
(18, 'Hayam Bakakak,Cireng,Kerupuk Melarat,Lepet', '1,1,1,1', 0, '2020-08-16 00:21:14'),
(19, 'Kue Jojorong', '1', 0, '2020-08-16 00:30:42'),
(20, 'Hayam Bakakak,Leumeung', '9,1', 0, '2020-08-16 01:02:33'),
(21, 'Cireng', '[1]', 0, '2020-08-16 01:07:58'),
(22, 'Hayam Bakakak,Leumeung', '9,1', 0, '2020-08-16 01:09:38'),
(23, 'Cireng', '1', 10000, '2020-08-16 01:10:30'),
(24, 'Leumeung,Hayam Bakakak', '1,1', 40000, '2020-08-16 01:13:59'),
(25, 'Cireng', '18', 216000, '2020-08-16 01:36:44'),
(26, 'Kue Jojorong', '5', 50000, '2020-08-16 03:27:52'),
(27, 'Leumeung', '9', 135000, '2020-08-16 03:41:56'),
(28, 'Leumeung', '9', 135000, '2020-08-16 03:43:29'),
(29, 'Kerupuk Melarat,Hayam Bakakak,Cireng,Lepet,Leumeung,Opak', '1,2,2,1,1,1', 114000, '2020-08-16 04:06:43'),
(30, 'Cireng,Kerupuk Melarat,Leumeung', '1,1,1', 37000, '2020-08-16 06:02:05'),
(31, 'Cireng,Hayam Bakakak,Leumeung,Lepet,Kerupuk Melarat,Kue Jojorong', '1,1,1,1,1,1', 82000, '2020-08-16 06:44:33'),
(32, 'Cireng,Hayam Bakakak,Leumeung,Lepet,Kerupuk Melarat,Kue Jojorong', '1,1,1,1,1,1', 82000, '2020-08-16 06:44:35'),
(33, 'Leumeung,Opak,Lepet,Kerupuk Melarat', '12,1,1,9', 735000, '2020-08-16 08:02:07'),
(34, 'Cireng', '1', 12000, '2020-08-17 03:08:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products_table`
--

CREATE TABLE `products_table`
(
  `product_id` int
(11) NOT NULL,
  `product_name` varchar
(255) NOT NULL,
  `product_price` decimal
(10,0) NOT NULL,
  `product_stock` int
(11) NOT NULL,
  `product_image` varchar
(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp
(),
  `change_at` timestamp NOT NULL DEFAULT current_timestamp
() ON
UPDATE current_timestamp(),
  `category_id
` int
(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products_table`
--

INSERT INTO `products_table` (`
product_id`,
`product_name
`, `product_price`, `product_stock`, `product_image`, `create_date`, `change_at`, `category_id`) VALUES
(1, 'Cireng', '12000', 50, 'https://moondoggiesmusic.com/wp-content/uploads/2019/03/Cireng.jpg', '2020-08-13 13:35:29', '2020-08-13 13:35:29', 1),
(2, 'Hayam Bakakak', '25000', 100, 'https://moondoggiesmusic.com/wp-content/uploads/2019/03/media-bogor-kuliner-grand-savero-ayam-bakar-madu.jpg', '2020-08-13 13:37:25', '2020-08-13 13:37:25', 1),
(3, 'Leumeung', '15000', 30, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Leumeung-Makanan-Khas-Banten.jpg', '2020-08-13 13:38:17', '2020-08-13 13:38:17', 2),
(4, 'Kerupuk Melarat', '10000', 20, 'https://moondoggiesmusic.com/wp-content/uploads/2019/03/Kerupuk-Melarat.jpg', '2020-08-13 13:39:03', '2020-08-13 13:39:03', 1),
(5, 'Lepet', '10000', 25, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Lepet-Khas-Banten.jpg', '2020-08-13 13:39:41', '2020-08-13 13:39:41', 2),
(6, 'Kue Jojorong', '10000', 50, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Kue-Jojorong-Khas-Banten.jpg', '2020-08-13 13:40:14', '2020-08-13 13:40:14', 2),
(7, 'Opak', '5000', 100, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Opak-Khas-Banten.jpg', '2020-08-13 13:40:50', '2020-08-13 13:40:50', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users`
(
  `user_id` int
(11) NOT NULL,
  `name` varchar
(255) NOT NULL,
  `email` varchar
(255) NOT NULL,
  `username` varchar
(255) NOT NULL,
  `password` varchar
(255) NOT NULL,
  `level_id` int
(11) NOT NULL,
  `registered_date` timestamp NOT NULL DEFAULT current_timestamp
()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`
user_id`,
`name
`, `email`, `username`, `password`, `level_id`, `registered_date`) VALUES
(1, 'Name 1', 'name1@surel.com', 'nameone', '$2b$10$fvlyujW27/toKMNCgMQiHepP/zvyUKZdfHKnOJ/L/YKSPAnwUZlgK', 1, '2020-08-14 01:38:39'),
(2, 'Name 2', 'name2@surel.com', 'nametwo', '$2b$10$XNeJNtjLliLhwKTFmhuMQ.Ywcqtp1ZMnjiy4/a.eqldLoY2pmTvGG', 2, '2020-08-14 01:39:33'),
(3, 'Name 3', 'name3@surel.com', 'namethree', '$2b$10$p.akV89jj/ZJSOAdWv2jR.7/imXqQAt6GaALM/ryjEETjGk7oqYfm', 2, '2020-08-14 01:39:53'),
(4, 'Name 4', 'name4@surel.com', 'namefour', '$2b$10$poNCw1cap3X5QPgnO6QLdOGUHiCJLPFcQ6SqO2iwr/ZNn2kHX8MDi', 1, '2020-08-17 05:28:04'),
(5, 'Name 5', 'name5@surel.com', 'namefive', '$2b$10$vpgY06Q3UxEuYhMaeswEzOnNpagIzIkzY7WTwWMmzwtop6bC.pw8a', 2, '2020-08-17 13:58:59'),
(6, 'Name 6', 'name6@surel.com', 'namesix', '$2b$10$OyM35l7jL8Xbp.oTUzgN/.EqPWP4Z.yhpVjcRqfasONZ7cryVMTSu', 1, '2020-08-17 14:01:39'),
(7, 'Name 7', 'name7@surel.com', 'nameseven', '$2b$10$gT1q9Rp2yxhoY6FK46RnAeD.DtcheRj4344SF9wUX5/uFpCUf2hue', 1, '2020-08-17 14:06:28');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `history_table`
--
ALTER TABLE `history_table`
ADD PRIMARY KEY
(`order_id`);

--
-- Indeks untuk tabel `order_table`
--
ALTER TABLE `order_table`
ADD PRIMARY KEY
(`order_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY
(`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `history_table`
--
ALTER TABLE `history_table`
  MODIFY `order_id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `order_table`
--
ALTER TABLE `order_table`
  MODIFY `order_id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
