CREATE TABLE employes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    poste VARCHAR(50),
    salaire DECIMAL(10,2),
    departement VARCHAR(50),
    date_embauche DATE
);
INSERT INTO employes (nom, prenom, poste, salaire, departement, date_embauche) VALUES
('Hkamdan', 'Ayoub', 'Développeur', 3500, 'IT', '2022-01-15'),
('Rajix', 'Younes', 'Designer', 2800, 'Marketing', '2023-03-10'),
('Ali', 'Karim', 'Manager', 5000, 'Management', '2021-06-20'),
('Sara', 'Laila', 'Marketeur', 3200, 'Marketing', '2022-11-05'),
('Omar', 'Nabil', 'Développeur', 4000, 'IT', '2020-09-12'),
('Fatima', 'Zahra', 'RH', 2700, 'HR', '2023-07-01'),
('Mehdi', 'Amine', 'Analyste', 3100, 'Finance', '2021-12-25'),
('Salma', 'Nour', 'Marketeur', 2900, 'Marketing', '2024-02-14');


SELECT * FROM employes;
SELECT * FROM employes as e WHERE e.departement = "Marketing";
SELECT * FROM employes as e WHERE e.salaire > 3000 ORDER BY e.salaire DESC;
SELECT * FROM employes as e ORDER BY e.salaire DESC LIMIT 5;
SELECT COUNT(*) AS TORAL_EMPLOYEE FROM employes;

