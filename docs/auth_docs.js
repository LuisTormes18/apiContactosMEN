/**
 * @swagger
 * components:
 *  schemas:
 *    NoFound:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          description: codigo de respuesta
 *        msg:
 *          type: string
 *          description: mensage de respuesta
 */
/**
 * @swagger
 * components:
 *  schemas:
 *    Success:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          description: codigo de respuesta
 *        msg:
 *          type: string
 *          description: mensage de respuesta
 *        user:
 *          type: object
 *          description: EL usuario
 *        token:
 *          type: string
 *          description: el token de autenticacion
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: email del usuario
 *        password:
 *          type: string
 *          description: contraseña del usuario
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: usuario@gmail.com
 *        password: '123456'
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Register:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: nombre del usuario
 *        email:
 *          type: string
 *          description: email del usuario
 *        password:
 *          type: string
 *          description: contraseña del usuario
 *      required:
 *        - email
 *        - password
 *      example:
 *        name: newUser
 *        email: newusuario@gmail.com
 *        password: '123456'
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: endpoint de autenticación
 */

/**
 * @swagger
 * /auth:
 *   get:
 *     summary: actualizar el token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Peticion exitosa
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               items: 
 */
 

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Login en la aplicacion
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content: 
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *        description: Peticion exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Success'
 *       400:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NoFound'
 */
 
 /**
 * @swagger
 * /auth/add:
 *   post:
 *     summary: Registrarse en la aplicacion
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content: 
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *        description: Peticion exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Success'
 *       400:
 *        description: Error 
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NoFound'
 */
