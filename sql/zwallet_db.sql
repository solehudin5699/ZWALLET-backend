-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Okt 2020 pada 07.24
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id_transaction` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `id_receiver` int(11) NOT NULL,
  `nominal` int(11) NOT NULL,
  `type_transaction` varchar(255) NOT NULL,
  `notes` varchar(255) NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id_transaction`, `id_sender`, `id_receiver`, `nominal`, `type_transaction`, `notes`, `transaction_date`) VALUES
(1, 1, 2, 1000, 'Transfer', 'beli sesuatu', '2020-09-30 02:30:39'),
(2, 1, 2, 1000, 'Transfer', 'beli Sate', '2020-09-30 02:36:50'),
(3, 1, 2, 1000, 'Transfer', 'beli sesuatu', '2020-09-30 02:38:06'),
(4, 1, 2, 1000, 'Transfer', 'beli sesuatu', '2020-09-30 03:20:03'),
(5, 1, 2, 1000, 'Transfer', 'beli Ayam', '2020-09-30 03:40:14'),
(6, 1, 2, 1000, 'Transfer', 'beli sesuatu', '2020-09-30 03:42:52'),
(7, 1, 2, 1000, 'Transfer', 'beli Soto', '2020-09-30 03:57:54'),
(8, 1, 2, 100, 'Transfer', 'beli Soto', '2020-09-30 04:18:29'),
(9, 1, 5, 12, 'Transfer', 'Apa aja', '2020-10-02 03:07:43'),
(10, 1, 5, 100, 'Transfer', 'Beli Ayam', '2020-10-02 03:17:58'),
(11, 1, 5, 10, 'Transfer', 'Beli ayam', '2020-10-02 04:16:16'),
(12, 1, 5, 10, 'Transfer', 'Beli ayam', '2020-10-02 04:18:31'),
(13, 1, 5, 10, 'Transfer', 'Apa aja', '2020-10-02 04:20:30'),
(14, 1, 5, 10, 'Transfer', 'Apa aja', '2020-10-02 04:26:41'),
(15, 1, 5, 10, 'Transfer', 'Apa aja', '2020-10-02 04:42:49'),
(16, 1, 6, 38, 'Transfer', 'Apa aja', '2020-10-02 05:46:50'),
(17, 2, 1, 1000, 'Transfer', 'Buat beli ayam', '2020-10-02 06:09:08'),
(18, 1, 6, 100, 'Transfer', 'Beli ayam', '2020-10-02 06:31:58'),
(19, 1, 4, 100, 'Transfer', 'Buat jajan permen', '2020-10-02 10:20:04'),
(20, 4, 1, 100, 'Transfer', 'Beli permen kaki', '2020-10-02 10:26:45'),
(21, 4, 1, 100, 'Transfer', 'Beli permen lagi', '2020-10-02 10:39:42'),
(22, 4, 1, 100, 'Transfer', 'Apa ya.', '2020-10-02 10:44:40'),
(23, 1, 5, 200, 'Transfer', 'Buat beli bensin', '2020-10-02 11:39:01'),
(24, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-02 12:42:11'),
(25, 1, 5, 100, 'Transfer', 'Beli peuyeum', '2020-10-02 12:59:36'),
(26, 1, 5, 100, 'Transfer', 'Beli apa aja', '2020-10-02 13:18:16'),
(27, 1, 5, 100, 'Transfer', 'Beli apa aja', '2020-10-02 14:08:32'),
(28, 1, 5, 100, 'Transfer', 'Beli permen kaki', '2020-10-05 00:22:12'),
(29, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-05 00:23:52'),
(30, 1, 5, 100, 'Transfer', 'Beli apa aja', '2020-10-05 00:24:35'),
(31, 1, 5, 100, 'Transfer', 'Nyoba aja', '2020-10-05 00:26:28'),
(32, 1, 5, 100, 'Transfer', 'Beli permen', '2020-10-05 00:29:07'),
(33, 1, 5, 100, 'Transfer', 'Beli permen', '2020-10-05 00:31:48'),
(34, 1, 5, 100, 'Transfer', 'Hshsh', '2020-10-05 17:42:49'),
(35, 1, 7, 100, 'Transfer', 'Beli korek api', '2020-10-07 06:40:37'),
(36, 1, 2, 100, 'Transfer', 'Beli pita', '2020-10-07 06:41:51'),
(37, 1, 2, 100, 'Transfer', 'Nyoba aja', '2020-10-07 06:46:01'),
(38, 2, 1, 1400, 'Transfer', 'Nambah saldo', '2020-10-07 07:35:49'),
(39, 2, 1, 1000, 'Transfer', 'Beli kopi', '2020-10-07 07:36:48'),
(40, 1, 5, 100, 'Transfer', 'Hmm', '2020-10-07 11:44:58'),
(41, 1, 7, 100, 'Transfer', 'Beli permen', '2020-10-07 12:11:27'),
(42, 1, 5, 100, 'Transfer', 'Nyoba aja', '2020-10-07 12:13:12'),
(43, 1, 6, 200, 'Transfer', 'Coba', '2020-10-07 12:15:14'),
(44, 1, 6, 100, 'Transfer', 'Apa aja', '2020-10-07 12:20:11'),
(45, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-07 12:22:41'),
(46, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-07 12:24:13'),
(47, 1, 5, 100, 'Transfer', 'Buat coba', '2020-10-07 12:29:57'),
(48, 1, 5, 100, 'Transfer', 'Vzbbs', '2020-10-07 12:30:44'),
(49, 1, 5, 100, 'Transfer', 'Vzbbs', '2020-10-07 12:30:48'),
(50, 1, 5, 100, 'Transfer', 'Permen kopi', '2020-10-07 12:32:04'),
(51, 1, 5, 100, 'Transfer', 'Permen', '2020-10-07 12:34:50'),
(52, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-07 12:41:26'),
(53, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-07 12:45:09'),
(54, 1, 5, 100, 'Transfer', 'Beli permen', '2020-10-07 12:53:34'),
(55, 1, 5, 100, 'Transfer', 'Coba', '2020-10-07 12:54:18'),
(56, 1, 5, 100, 'Transfer', 'Beli permen', '2020-10-07 12:55:19'),
(57, 1, 6, 100, 'Transfer', 'Coba', '2020-10-07 13:02:12'),
(58, 1, 5, 100, 'Transfer', 'Beli permen', '2020-10-07 13:03:48'),
(59, 1, 5, 100, 'Transfer', 'Transfer terus', '2020-10-07 13:05:35'),
(60, 1, 5, 100, 'Transfer', 'Apa aja', '2020-10-07 13:06:53'),
(61, 2, 1, 1000, 'Transfer', 'Transfer terus', '2020-10-07 13:10:01'),
(62, 2, 1, 100, 'Transfer', 'Beli permen', '2020-10-07 13:12:59'),
(63, 2, 1, 100, 'Transfer', 'Beli permen', '2020-10-07 13:14:51'),
(64, 2, 5, 100, 'Transfer', 'Beli ayam', '2020-10-07 13:16:45'),
(65, 2, 5, 100, 'Transfer', 'Beli permen', '2020-10-07 13:21:10'),
(66, 2, 5, 100, 'Transfer', 'Beli permen', '2020-10-07 13:22:34'),
(67, 2, 1, 100, 'Transfer', 'Hhe', '2020-10-07 13:25:22'),
(68, 2, 5, 100, 'Transfer', 'Beli ayam', '2020-10-07 13:27:05'),
(69, 2, 1, 100, 'Transfer', 'Sedekah', '2020-10-07 13:28:47'),
(70, 2, 5, 100, 'Transfer', 'Apa aja', '2020-10-07 13:44:46'),
(71, 2, 1, 100, 'Transfer', 'Apa aja', '2020-10-07 13:46:29'),
(72, 1, 5, 300, 'Transfer', 'Apa aja', '2020-10-08 02:52:19'),
(73, 1, 5, 100, 'Transfer', 'Beli permen', '2020-10-08 05:16:49'),
(75, 1, 6, 100, 'Transfer', 'Beli permen', '2020-10-08 06:00:45'),
(76, 1, 6, 100, 'Transfer', 'Beli permen maknyus', '2020-10-08 06:59:25'),
(77, 1, 5, 100, 'Transfer', 'Beli permen maknyus', '2020-10-08 07:02:01'),
(78, 1, 6, 100, 'Transfer', 'Beli permen maknyus', '2020-10-08 09:00:03'),
(79, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 03:02:36'),
(80, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 03:04:11'),
(81, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 03:09:35'),
(82, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 03:26:58'),
(83, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 03:31:48'),
(84, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 04:18:51'),
(85, 1, 5, 100, 'Transfer', '123', '2020-10-09 06:44:04'),
(86, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 06:51:55'),
(87, 2, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 06:52:51'),
(88, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 06:54:13'),
(89, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 06:55:15'),
(90, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 06:56:49'),
(91, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:01:15'),
(92, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:03:06'),
(93, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:26:36'),
(94, 1, 3, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:32:50'),
(95, 1, 3, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:33:52'),
(96, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:42:34'),
(97, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:45:37'),
(98, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:48:46'),
(99, 3, 1, 100, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:50:59'),
(100, 3, 1, 150, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:52:42'),
(101, 3, 1, 150, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:57:05'),
(102, 3, 1, 300, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:57:33'),
(103, 3, 1, 300, 'Transfer', 'beli Ayam Goreng', '2020-10-09 07:58:08'),
(104, 3, 1, 300, 'Transfer', 'beli Ayam Goreng', '2020-10-09 08:01:22'),
(105, 1, 3, 300, 'Transfer', 'beli Ayam Goreng', '2020-10-09 08:02:02'),
(106, 1, 6, 300, 'Transfer', 'beli Ayam Goreng', '2020-10-09 08:58:45'),
(107, 1, 3, 100, 'Transfer', 'Beli permen', '2020-10-19 06:17:09'),
(108, 1, 5, 300, 'Transfer', 'Beli permen maknyus', '2020-10-19 13:21:21'),
(109, 1, 2, 100, 'Transfer', 'Apa ya', '2020-10-19 13:23:20'),
(110, 2, 1, 50, 'Transfer', 'beli Soto', '2020-10-19 13:28:31'),
(111, 2, 1, 50, 'Transfer', 'beli Soto', '2020-10-19 13:55:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pin` int(11) NOT NULL,
  `noHp` varchar(15) NOT NULL,
  `image` varchar(255) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `name`, `username`, `email`, `password`, `pin`, `noHp`, `image`, `register_date`, `balance`) VALUES
(1, 'Solehudin', 'solehudin1', 'solehudin5699@gmail.com', '$2b$10$sehs35qv0d2aDIqgoG.yiuLSsR3cZG4cki8ZaeJMl/bm6bBaB3s.m', 123456, '082319550000', '/profileImages/1603290922626-image.jpg', '2020-09-27 17:16:20', 2600),
(2, 'Solehudin', 'solehudin2', 'solehudin2@surel.com', '$2b$10$M1Pv2WiePbU0qKd4TQcvyumd.SZsNeUsbr8HweM0OkX8gG8buuMUW', 123456, '', '/profileImages/1602012593608-image.jpg', '2020-09-28 01:42:56', -800),
(3, 'Solehudin', 'solehudin3', 'solehudin3@surel.com', '$2b$10$o6IBo8trC20cEg7IDe07Q.bqF/PZVpWQnZvPGYMdyu47ij9PJiRUa', 123456, '', '/profileImages/1601869520738-image.jpg', '2020-09-28 01:51:33', 4400),
(4, 'Solehudin', 'solehudin4', 'solehudin4@surel.com', '$2b$10$ks3VdKcF3HtsqwY4dhqBvu10vunAsGnJ.RKNxYZPMVhwy3da4A7Ue', 123456, '', '/profileImages/1601919904324-image.jpg', '2020-09-28 03:11:19', 5800),
(5, '', 'zulhamdani', 'zulhamdani@surel.com', '$2b$10$pxVt0s1xqk4dls/OsPkUK.VG/KOUnzZ5swIDMU4ZeKB5utN3Sr3aS', 123456, '', '/profileImages/1601869997742-image.jpg', '2020-10-01 04:53:03', 4562),
(6, '', 'burhan', 'burhan@surel.com', '$2b$10$1AbUuAJbn70Ew0M9uU6EFuMJBN66nNH2wIcAszsDr0J23JgqOHJlq', 123456, '', '/profileImages/1602001286650-image.jpg', '2020-10-01 08:01:14', 1238),
(7, '', 'solehudin100', 'solehudin100@surel.com', '$2b$10$mLqn79McOUk.gGR5wbkcBuNPsmQf3eBOHlc1/JEDRl82eSDFvMS1O', 0, '', '/profileImages/1602006032798-image.jpg', '2020-10-06 17:03:28', 200);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id_transaction`),
  ADD KEY `id_sender` (`id_sender`),
  ADD KEY `id_receiver` (`id_receiver`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id_transaction` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
