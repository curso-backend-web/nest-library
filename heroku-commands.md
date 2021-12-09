
```bash
### Actualizamos la versión de git
$ git add . && git commit -m 'new version'
[master ce71d19] new version
 1 file changed, 15 insertions(+), 6 deletions(-)

### Generamos el build de producción
$ npm run build

> nest-typescript-starter@1.0.0 prebuild C:\Users\Alumne\Desktop\workspace\nest-library        
> rimraf dist


> nest-typescript-starter@1.0.0 build C:\Users\Alumne\Desktop\workspace\nest-library
> nest build


### Nos conectamos a Heroku
$ heroku container:login
Login Succeeded

### Creamos la app de heroku
$ heroku create library-rgl
Creating ⬢ library-rgl... done
https://library-rgl.herokuapp.com/ | https://git.heroku.com/library-rgl.git

### Generamos el contenedor en Heroku
$ heroku container:push web --app library-rgl
=== Building web (C:\Users\Alumne\Desktop\workspace\nest-library\Dockerfile)
[+] Building 7.7s (11/11) FINISHED
 => [internal] load build definition from Dockerfile                                      0.5s 
 => => transferring dockerfile: 32B                                                       0.1s 
 => [internal] load .dockerignore                                                         0.7s 
 => => transferring context: 34B                                                          0.0s 
 => [internal] load metadata for docker.io/library/node:16                                3.1s 
 => [1/6] FROM docker.io/library/node:16@sha256:89b59ce49929d8a8e230946bdb1b58c14cdbbb86  0.3s 
 => => resolve docker.io/library/node:16@sha256:89b59ce49929d8a8e230946bdb1b58c14cdbbb86  0.3s 
 => [internal] load build context                                                         0.5s 
 => => transferring context: 254.76kB                                                     0.0s 
 => CACHED [2/6] RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/no  0.0s 
 => CACHED [3/6] WORKDIR /home/node/app                                                   0.0s 
 => CACHED [4/6] COPY package*.json ./                                                    0.0s 
 => CACHED [5/6] RUN npm ci --only=production                                             0.0s 
 => [6/6] COPY --chown=node:node ./dist ./dist                                            1.1s 
 => exporting to image                                                                    1.7s 
 => => exporting layers                                                                   0.7s
 => => writing image sha256:cfc3600fc9f14c11061e488f5509ddf0cb031f8390100984aaf4b091f900  0.1s 
 => => naming to registry.heroku.com/library-rgl/web                                      0.1s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
=== Pushing web (C:\Users\Alumne\Desktop\workspace\nest-library\Dockerfile)
Using default tag: latest
The push refers to repository [registry.heroku.com/library-rgl/web]
5ca05f4c92cf: Pushed
70f50cffe830: Pushing  66.94MB/143.1MB
65724b679240: Pushed
5f70bf18a086: Pushed
72b185fea336: Pushed
cb5c6f01afdd: Pushed
70f50cffe830: Pushing  67.49MB/143.1MB
70f50cffe830: Pushed
a1190e978df5: Pushed
227e0c39f037: Pushed
66b1d61820c3: Pushed
92903c3857f8: Pushed
9ad2165feb02: Pushed
2c7e7ab2260a: Pushed
latest: digest: sha256:5206b21437da0fdefc0e608e952fb42ed2c51bdb95a5869da986b42608d9f66d size: 3257
Your image has been successfully pushed. You can now release it with the 'container:release' command.

### Publicamos la app en Heroku
$ heroku container:release web --app library-rgl
Releasing images web to library-rgl... done

### Instalamos el add-on de MySQL
$ heroku addons:create cleardb:ignite --app library-rgl
Creating cleardb:ignite on ⬢ library-rgl... free
Created cleardb-encircled-13218 as CLEARDB_DATABASE_URL
Use heroku addons:docs cleardb to view documentation

### Obtenemos el valor de la variable de configuración
$ heroku config --app library-rgl | grep CLEARDB_DATABASE_URL
CLEARDB_DATABASE_URL: mysql://xxxxxxxx/xxxxxxx?reconnect=true

### Configuramos la variable de entorno
$ heroku config:set DATABASE_URL='mysql://xxxxxxxx/xxxxxxx?reconnect=true/' --app library-rgl
Setting DATABASE_URL and restarting ⬢ library-rgl... done, v6
DATABASE_URL: mysql://xxxxxxxx/xxxxxxx?reconnect=true  
```
