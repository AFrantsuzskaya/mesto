export default class Api {
    constructor({ address, groupId, token }) {
        this._address = address
        this._groupId = groupId
        this._token = token
    }

    getAppInfo() {
        return Promise.all([this.getUserInfo(), this.getCardList()])
    }

    getUserInfo() {
        return this._get('users/me')
    }

    setUserInfo(name, about) {
        return this._set('users/me', 'PATCH', {name, about})
    }
    
    setUserAvatar(avatar) {
        avatar = {avatar: avatar}
        return this._set('users/me/avatar', 'PATCH', avatar)
        
    }

    getCardList() {
        return this._get('cards')
    }
    
    removeCard(id) {
        return this._set(`cards/${id}`, 'DELETE', {});

    }

    setCard(name, link) {
       return this._set('cards', 'POST', {name, link})
    }
    
    toggleLike(id, liked) {
        return this._set(`cards/likes/${id}`, liked ? 'PUT' : 'DELETE')
      }

    _get(query) {
        const options = {
            headers: {
                authorization: this._token
            }
        }
        return fetch(this._url(query), options)
            .then(this._checkResponse)
    }

    _set(query, method, body) {
        const options = {
            method,
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        
        return fetch(this._url(query), options)
            .then(this._checkResponse)
    }
    
    _checkResponse(res) {
       return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }


    _url(query) {
        return `${this._address}/${this._groupId}/${query}`
    }
}