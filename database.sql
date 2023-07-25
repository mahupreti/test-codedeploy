--
-- Database: `test_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(20) NOT NULL,
  `address` varchar(250) NOT NULL,
  `email` varchar(50) NOT NULL,
  `insertUTC` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `password`, `role`, `address`, `email`, `insertUTC`) VALUES
(1, 'dinesh', '123456', 'admin', 'salem', 'dinesh@gmail.com', '2021-08-29 04:40:26'),
(2, 'santhosh', '987456', 'manager', 'chennai', 'santhosh@gmail.com', '2021-08-29 04:40:26');