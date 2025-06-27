Verilen görev tanımından eksik noktaları var bunun farkında olarak atıyorum. Görev tanımında eksik veya yanlış anladığım bir kısım yok bunu belirtmek isterim. Uygulamanın web alanında benim ilk projem olması ve öğrenirken yapma sürecimde zaman problemi yaşadığımdan bu şekilde teslim etme tercihinde bulundum.
Bu proje, basit bir To-Do web uygulamasıdır. Kullanıcılar e-posta ve şifre ile kayıt olma, giriş yapma ve oturum açtıkları sürece görev ekleme, listeleme özelliklerini kullanabilir.
Uygulamada kayıt olma ve giriş yapma kısımlarında hata verdiğinde sayfayı tekrar yükleme (refresh) gerekmektedir. Bilginize

---

## İçindekiler

* Özellikler
* Teknik Gereksinimler
* Kurulum Adımları

  * 1. Depoyu Klonlama
  * 2. Veritabanı Kurulumu
  * 3. Backend Kurulumu ve Başlatma
  * 4. Frontend Kurulumu ve Başlatma
* Proje Dizini
* Kullanım




## Özellikler

* Kayıt Olma (Signup): Yeni kullanıcıların `name`, `email`, `password` bilgileriyle kaydolması.
* Giriş Yapma (Login): Kayıtlı kullanıcıların e-posta ve şifreyle kimlik doğrulaması.
* Görev Yönetimi: Kullanıcılar oturum açtıktan sonra basit metin tabanlı görevler ekleyebilir ve listeleyebilir.

Teknik Gereksinimler

* Node.js v14 veya üzeri
* npm (Node Paket Yöneticisi)
* MySQL Server (örn. 8.0+)
* React

Kurulum Adımları

### 1. Depoyu Klonlama

```bash
git clone <REPO_URL>
cd todo-app
```

### 2. Veritabanı Kurulumu

1. MySQL sunucunuzu çalıştırın.
2. MySQL terminal veya Workbench üzerinden aşağıdaki SQL komutlarını çalıştırın:

```sql
CREATE DATABASE signup;
USE signup;
CREATE TABLE login (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

> **Not:** `database` ismi ve tablo şeması, backend `back/server.js` içinde tanımlıdır.

### 3. Backend Kurulumu ve Başlatma

```bash
cd back
npm install
# Gerekirse MySQL bağlantı ayarlarını düzenleyin: back/server.js içinde
npm start
```

* Sunucu varsayılan olarak "http://localhost:5000" adresinde dinlemeye başlar.

### 4. Frontend Kurulumu ve Başlatma

```bash
cd front
npm install
npm start
```

* React uygulaması "http://localhost:3000" adresinde erişilebilir.

## Proje Dizini

```
todo-app/
├─ back/           # Express + MySQL API katmanı
│  ├─ server.js    # API uç noktaları (signup, login)
│  └─ package.json
├─ front/          # React ön yüz uygulaması
│  ├─ src/
│  │  ├─ login.js
│  │  ├─ Signup.js
│  │  ├─ Home.js
│  │  └─ ...
│  └─ package.json
├─ node_modules/
├─ package.json    # Proje genel bağımlılıkları
└─ README.md       # Bu dosya
```

## Kullanım

1. Tarayıcıda "http://localhost:3000" adresine gidin.
2. Kayıt olmak için "Sign Up" sayfasına geçiş yapın.
3. Kayıtlı kullanıcı bilgileriyle "Login" sayfasından giriş yapın.
4. Hedeflenen görevleri Home ekranındaki giriş alanına yazarak `Add Task` ile ekleyin.


