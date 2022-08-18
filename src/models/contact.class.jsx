export class Contact {
  id = '';
  name = '';
  surname = '';
  email = '';
  nickname = '';
  available = false;
  profile_picture = '';

  constructor(id, name, surname, email, nickname, available, profile_picture) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.nickname = nickname;
    this.available = available;
    this.profile_picture = profile_picture
  }
}