exports.getUser = info => {
  console.info(info)
  
  const { id, is_bot: isBot, first_name: firstName, last_name: lastName } = info

  const name = (firstName ? firstName : '' + ' ' + lastName ? lastName : '').trim()
    console.info([id,isBot,name])
  return { id, isBot, name }
}
