use techwreck_db;

INSERT INTO USER ( id ,username, email, password ) 
Values
('hiren_patel','hiren@yahoo.com','hiu1234'),
('brett_shulmen','brett@yahoo.com','hjhj5678'),
('alan_jose','jose@yahoo.com','kjgl9012'),
('nordleen_defrias','nordleen@yahoo.com','iuyuyg3456');


INSERT INTO post ( user_id, username, postdate, title, content) 
VALUES
(1,'hiren_patel','10/26/2022','title1','i am a webdeveloper'),
(2,'brett_shulmen','10/25/2022','title2','i am a student'),
(3,'alan_jose','10/24/2022','title3','i am a father'),
(4,'nordleen_defrias','10/23/2022','title4','i am a manager');

INSERT INTO VIDEO ( id, post_id) 
VALUES
(1,'23423'),
(2,'65867'),
(3,'0989'),
(4,'675');
