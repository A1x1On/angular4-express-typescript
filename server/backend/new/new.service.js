// 'use strict';
//
// // ---
//
//
// const repository  = require('./new.repository.js')();
//
//
// // ---
//
// module.exports.route = require('express').Router()
//
//
//   .get('/removeSID', (req, res, next) => {
//     repository.removeSID()
//       .then(res.json.bind(res))
//       .catch(next)
//     ;
//   })
//
//
// ;
//


// var router = express.Router();
//
//
// router.get("/heroes", controller.retrieve);
// router.post("/heroes", controller.create);

//....

// import HeroBusiness = require("./../app/business/HeroBusiness"); // REPOSITORY
//
// import IHeroModel = require("./../app/model/interfaces/HeroModel"); //INTERFEIS

// create(req: express.Request, res: express.Response): void {
//   var hero: IHeroModel = <IHeroModel>req.body;
//   var heroBusiness = new HeroBusiness();
//   heroBusiness.create(hero, (error, result) => {
//     res.send({"success": "success"});
//   });
// }
// retrieve(req: express.Request, res: express.Response): void {
//   var heroBusiness = new HeroBusiness();
//   heroBusiness.retrieve((error, result) => { // INTERFACE.METHOD() --- лучше вариант, обращаться к методам репозитория через интерфейс (описывать)
//     res.send(result);
//   });
// }
//


////ИНТЕРФЕЙСЫ
// public interface IUserActionLogger<T> where T : IEntity
// {
//   void Create(T entity, int userId);
//   void Delete(T entity, int userId);
//   void Restore(T entity, int userId);
//   void Edit(T entity, int userId);
//   void EditName(T entity, int userId);
//   void Login(int userId);
//   void Logout(int userId);
//   void View(ObjectType section, int userId, string objectId = null);
//   void Change<TResult>(T entity, Expression<Func<T, TResult>> fieldExpression, TResult value, int userId, bool saveContent = true);
// }

// private readonly IUserActionLogger<MainNewsModel> _userActionLogger; // передать тип
// _userActionLogger = new UserActionLogger<MainNewsModel>(); // создать ссылку
// _userActionLogger.View(ObjectType.MainNews, UserManager.CurrentUser.Id); // использовать методы
// public class UserActionLogger<T> : IUserActionLogger<T> where T : IEntity {  // репозиторий наследуется от интерфейса
// [Description("Просмотр элемента/раздела системы")] // реализация метода
// public void View(ObjectType section, int userId, string objectId = null)
// {
//   var log = new UserActionLog
//   {
//     ChangeDate = DateTime.Now,
//       OperationType = OperationType.ViewSection,
//       Object = section,
//       ObjectId = objectId.IsNullOrWhiteSpace() ? null : objectId,
//       UserId = userId
//   };
//
//   _userActionLogRepository.Add(log);
// }

// class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> { //наследование