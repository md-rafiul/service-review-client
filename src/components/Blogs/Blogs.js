import React from "react";

const Blogs = () => {
  return (
    <div className="p-4">
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL :
        </div>
        <div className="collapse-content">
          <p className="px-5">
            There are five practical differences between SQL and NoSQL: Language
            Scalability Structure Properties Support and communities 1. Language
            SQL has been around for over 40 years, so it is recognizable,
            documented, and widely-used. Safe and versatile, its particularly
            well suited for complex queries. However, SQL restricts the user to
            working within a predefined tabular schema, and more care must be
            taken to organize and understand the data before it is used. The
            dynamic schemata of NoSQL databases allow representation of
            alternative structures, often alongside each other, encouraging
            greater flexibility. There is less emphasis on planning, greater
            freedom when adding new attributes or fields, and the possibility of
            varied syntax across databases. As a group, however, NoSQL languages
            lack the standard interface which SQL provides, so more complex
            queries can be difficult to execute. Though there are many dialects
            of SQL, all share a common syntax and almost-identical grammar. When
            querying relational databases, fluency in one language translates to
            proficiency in most others. On the other hand, there is very little
            consistency between NoSQL languages, as they concern a diverse set
            of unrelated technologies. Many NoSQL databases have a unique data
            manipulation language constrained by particular structures and
            capabilities. 2. Scalability Most SQL databases can be scaled
            vertically, by increasing the processing power of existing hardware.
            NoSQL databases use a master-slave architecture which scales better
            horizontally, with additional servers or nodes. These are useful
            generalizations, but its important to note: SQL databases can be
            scaled horizontally as well, though sharding or partitioning logic
            is often the users onus and not well supported. NoSQL technologies
            are diverse and while many rely on the master-slave architecture,
            options for scaling vertically also exist. Savings made using more
            efficient data structures can overwhelm differences in scalability;
            most important is to understand the use case and plan accordingly.
            3. Structure SQL database schemata always represent relational,
            tabular data, with rules about consistency and integrity. They
            contain tables with columns attributes and rows records, and keys
            have constrained logical relationships. NoSQL databases need not
            stick to this format, but generally fit into one of four broad
            categories: Column-oriented databases transpose row-oriented RDBMSs,
            allowing efficient storage of high-dimensional data and individual
            records with varying attributes. Key-Value stores are dictionaries
            which access diverse objects with a key unique to each. Document
            stores hold semi-structured data: objects which contain all of their
            own relevant information, and which can be completely different from
            each other. Graph databases add the concept of relationships direct
            links between objects to documents, allowing rapid traversal of
            greatly connected data sets. 4. Properties At a high level, SQL and
            NoSQL comply with separate rules for resolving transactions. RDBMSs
            must exhibit four “ACID” properties: Atomicity means all
            transactions must succeed or fail completely. They cannot be
            partially-complete, even in the case of system failure. Consistency
            means that at each step the database follows invariants: rules which
            validate and prevent corruption. Isolation prevents concurrent
            transactions from affecting each other. Transactions must result in
            the same final state as if they were run sequentially, even if they
            were run in parallel. Durability makes transactions final. Even
            system failure cannot roll-back the effects of a successful
            transaction. NoSQL technologies adhere to the “CAP” theorem, which
            says that in any distributed database, only two of the following
            properties can be guaranteed at once: Consistency: Every request
            receives the most recent result, or an error. Note this is different
            than in ACID Availability: Every request has a non-error result,
            regardless of how recent that result is. Partition tolerance: Any
            delays or losses between nodes will not interrupt the systems
            operation. 5. Support and communities SQL databases represent
            massive communities, stable codebases, and proven standards.
            Multitudes of examples are posted online and experts are available
            to support those new to programming relational data. NoSQL
            technologies are being adopted quickly, but communities remain
            smaller and more fractured. However, many SQL languages are
            proprietary or associated with large single-vendors, while NoSQL
            communities benefit from open systems and concerted commitment to
            onboarding users. SQL is available to most major platforms, from
            operating systems to architectures and programming languages.
            Compatibility varies more widely for NoSQL, and dependencies need to
            be investigated more carefully.
          </p>
        </div>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            JSON Web Token JWT is an open standard RFC 7519 for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity ProviderIdP. So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore database to save session information.
            Structure of JWT A JSON Web Token consists of 3 parts separated by a
            period. header.payload.signature Structure of JWT Header JWT header
            consists of token type and algorithm used for signing and encoding.
            Algorithms can be HMAC, SHA256, RSA, HS256 or RS256. "typ": "JWT",
            "alg": "HS256" Payload Payload consists of the session data called
            as claims. Below are some of the the standard claims that we can
            use, Issuer iss Subject sub Audience aud Expiration time exp Issued
            at iat "sub": "user10001", "iat": 1569302116 Custom claims can also
            be included in the claim set. When using custom claim sets, Do not
            put large data in claim sets. Claim sets meant to be compact. Do not
            put sensitive informations since, JWT can be decoded easily. "sub":
            "user10001", "iat": 1569302116, "role": "admin", "user_id":
            "user10001" Signature Signature is most important part of a JSON Web
            Token JWT. Signature is calculated by encoding the header and
            payload using Base64url Encoding and concatenating them with a
            period separator. Which is then given to the cryptographic
            algorithm. // signature algorithm data = base64urlEncode header +
            "." + base64urlEncode payload signature = HMAC-SHA256 data,
            secret_salt So when the header or payload changes, signature has to
            calculated again. Only the Identity ProviderIdP has the private key
            to calculate the signature which prevents the tampering of token.
            How it works? Basically the identity provider IdP generates a JWT
            certifying user identity and Resource server decodes and verifies
            the authenticity of the token using secret salt / public key. JWT
            User sign-in using username and password or google/facebook.
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
            Security Just like any other authentication mechanism, JWT also has
            its own pros and cons. Must use HTTPS to secure the Authorization
            headers. Validate algorithm name explicitly. Do not completely rely
            on the algorithm mentioned in the header of JWT. There are a few
            known attacks based on the header like algo none attack, header
            stripping. Revoking the session of a user from backend server is
            difficult. Since a JWT is set to automatically expire, If an
            attacker gets the token before it expires It leads to various
            exploits. Building a token revocation list on your server to
            invalidate tokens could be best way to mitigate. If JWT is persisted
            on cookies, we need to create HttpOnly cookie. This will restrict
            third party javascripts from reading jwt token from cookie. XSS
            backend servers must always sanitize user generated data. CSRF If
            JWT in persisted on cookies, CSRF attacks are possible. We can
            mitigate CSRF by using origin of request and special request
            headers.
          </p>
        </div>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option. 2. JavaScript is a simple programming language that can be
            used with any browser that has the JavaScript Engine installed.
            Node.js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language. It requires
            libraries that can be conveniently accessed from JavaScript
            programming to be more helpful. 3. Any engine may run JavaScript. As
            a result, writing JavaScript is incredibly easy, and any working
            environment is similar to a complete browser. Node.js, on the other
            hand, only enables the V8 engine. Written JavaScript code, on the
            other hand, can run in any context, regardless of whether the V8
            engine is supported. 4. A specific non-blocking operation is
            required to access any operating system. There are a few essential
            objects in JavaScript, but they are entirely OS-specific. Node.js,
            on the other hand, can now operate non-blocking software tasks out
            of any JavaScript programming. It contains no OS-specific constants.
            Node.js establishes a strong relationship with the system files,
            allowing companies to read and write to the hard drive. 5. The
            critical benefits of JavaScript include a wide choice of interfaces
            and interactions and just the proper amount of server contact and
            direct visitor input. Node.js, on the other hand, offers node
            package management with over 500 modules and the capacity to handle
            many requests at the same time. It also offers the unique ability to
            enable microservice architecture and the Internet of Things. Even
            when comparing node js vs. react js, node js always wins.
          </p>
        </div>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p className="px-5">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module. How to scale your NodeJS
            application with Cluster Module? A single instance of Node.js runs
            in a single thread. If you have a multi-core system then you can
            utilize every core. Sometimes developer wants to launch a cluster of
            NodeJS process to take advantage of the multi-core system. The
            cluster module allows easy creation of child processes that all
            share the same server ports. Step 1: Create a NodeJS application and
            install the required Express.js module. mkdir Project && cd Project
            npm init -y npm i express Step 2: Create an index.js file on your
            root directory with the following code. Explanation: If your system
            has 8 CPU then 8 NodeJS instances will be created and every instance
            has its own independent event loop. Now NodeJS can process all
            request parallelly. They are all share same port PORT 3000 but not
            state. The master process listens on a port, accepts new connections
            and distributes them across the workers in a round-robin fashion,
            with some built-in smarts to avoid overloading a worker process.
            Step 3: Run the index.js file using the following command. node
            index.js Output: Using worker_threads Module: The best solution for
            CPU performance is Worker Thread. This module is used in Node.js
            because it is useful for performing heavy JavaScript tasks. Instead
            of having: One process One thread One event loop One JS Engine
            Instance One Node.js Instance Worker threads have: One process
            Multiple threads One event loop per thread One JS Engine Instance
            per thread One Node.js Instance per thread Example: Create an
            index.js file with the following code. index.js const Worker =
            require'worker_threads'; const worker = new Worker__filename;
            worker.on'message', message = console.logmessage;
            worker.postMessage'GeeksforGeeks'; worker.emit true Run the server
            with the following command: node --experimental-worker index.js
            Note: We have to use the experimental-worker because Workers Thread
            modules are still experimental. Output: name: GeeksforGeeks Pros of
            Worker_Threads: Passing native handles around (http/https request)
            Deadlock detection. More isolation, so if one process is affected,
            it wont affect others. Cons of Worker_Threads: Not good for I/O
            operations. Spawning Workers is not cheap.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
